import { render, screen, queryByAttribute, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import Form from '../form/Form';
import userEvent from '@testing-library/user-event';
import App from '../../App';

const getById = queryByAttribute.bind(null, 'id');

describe("Test the Form component",()=>{
    // submit button is a combination of an input type submit wrapped inside a button
    // this was done to give the css ocean/wave effect
    // therefore submit button is a combination of two buttons
    test("render the form with a submit button", async ()=>{
        render(<Form />);
        const submitBtn = await screen.findAllByRole("button");
        expect(submitBtn).toHaveLength(2);
    });

    // country input field only accepts common or official name of a country
    test("country input field should accept common or official name",()=>{
        const formComponent = render(<Form />);
        const inputCountryField = getById(formComponent.container, 'country');
        userEvent.type(inputCountryField, "West Korea");
        expect(inputCountryField.value).not.toMatch("North Korea");
    });

    // if common or official name of a country is entered in the input field
    // then on click of submit the card flips to display information relating to that country
    test("should be able to submit the form", async ()=>{
        const app = render(<App />);
        const inputCountryField = getById(app.container, 'country');
        const submitBtn = getById(app.container, 'outerSubmitBtn');

        userEvent.type(inputCountryField, "Ireland");
        userEvent.click(submitBtn);
        waitFor(async () => {
            const infoOnScreen = screen.findByRole("img");
            expect(infoOnScreen).toBeInTheDocument();
        });
    });
});