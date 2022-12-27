import React from "react";
import { render } from "@testing-library/react-native";
import LoginPage from "../pages/authentication/Login";

describe('Login Screen', () => {

    const navigationMock = {}
    const page = render(<LoginPage navigation={navigationMock} />)

    it ('should render login button on page', () => {
        const loginButton = page.getByTestId('loginButton')
    })

    it ('should render sign up button on page', () => {
        const signUpButton = page.getByTestId('signUpButton')
    })
})