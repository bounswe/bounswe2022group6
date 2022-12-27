import React from "react";
import { render } from "@testing-library/react-native";
import HomeHeader from "../pages/home/HomeHeader";

// Tests about home header will be here
describe('Home Header', () => {
    const page = render(<HomeHeader />)

    it ('should render top bar on header', () => {
        const loginButton = page.getByTestId('signUpButton')
    })

    it ('should render menu button on header', () => {
        const loginButton = page.getByTestId('signUpButton')
    })

    it ('should render logo on header', () => {
        const loginButton = page.getByTestId('signUpButton')
    })

    it ('should render search button on header', () => {
        const loginButton = page.getByTestId('signUpButton')
    })

    it ('should render chatbot button on header', () => {
        const loginButton = page.getByTestId('signUpButton')
    })
})