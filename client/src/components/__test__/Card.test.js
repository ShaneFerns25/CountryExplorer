import { render, screen, queryByAttribute, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const getById = queryByAttribute.bind(null, 'id');

describe("Test the Card component",()=>{
    test("card should flip on form submission", async ()=>{
        const app = render(<App />);
        const inputCountryField = getById(app.container, 'country');
        const submitBtn = getById(app.container, 'outerSubmitBtn');

        userEvent.type(inputCountryField, "Ireland");
        userEvent.click(submitBtn);
        waitFor(async () => {
            const infoOnScreen = screen.findByRole("p");
            expect(infoOnScreen).toBeInTheDocument();
        });
    });
});