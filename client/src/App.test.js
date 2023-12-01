import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('render form component in the document', () => {
  const component = render(<App />);
  const childElement = component.getByText("Enter the name of a country");
  expect(childElement).toBeInTheDocument();
});