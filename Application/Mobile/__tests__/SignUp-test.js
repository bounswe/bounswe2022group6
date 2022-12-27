import React from "react";
import { render } from "@testing-library/react-native";
import SignUpScreen from "../pages/authentication/SignUpScreen";

// Tests about sign up screen will be here
describe('Signup Screen', () => {
    const props = {}
    const page = render(<SignUpScreen />)

    it ('should render sign up button on page', () => {
        const loginButton = page.getByTestId('signUpButton')
    })
})