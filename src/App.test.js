import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/contactForm"
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test("inputs are visible", () => {
  const {getByLabelText} = render(<ContactForm/>);

  const fNameInput = getByLabelText(/First Name*/i);
  expect(fNameInput).toBeVisible();
  const lNameInput = getByLabelText(/last name*/i);
  expect(lNameInput).toBeVisible();
  const emailInput = getByLabelText(/email*/i)
  expect(emailInput).toBeVisible()
  const messageInput = getByLabelText(/message/i);
  expect(messageInput).toBeVisible();
})

test("adds text to the form and submit", () =>{
  const {getByLabelText, getByTestId} = render(<ContactForm/>);

  const fNameInput = getByLabelText(/First Name*/i);
  const lNameInput = getByLabelText(/last name*/i);
  const emailInput = getByLabelText(/email*/i)
  const messageInput = getByLabelText(/message/i);
  
  
  fireEvent.change(fNameInput, {target: {value: "Steven"}})
  fireEvent.change(lNameInput, {target: {value: "Spencer"}})
  fireEvent.change(emailInput, {target: {value: "steve35spencer@gmail.com"}})
  fireEvent.change(messageInput, {target: {value: "This is my message"}})

  expect(fNameInput.value).toBe("Steven")
  expect(lNameInput.value).toBe("Spencer")
  expect(emailInput.value).toBe("steve35spencer@gmail.com")
  expect(messageInput.value).toBe("This is my message")

  fireEvent.click(getByTestId(/submit/i)) 
  
})