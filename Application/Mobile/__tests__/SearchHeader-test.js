import React from "react";
import { render } from "@testing-library/react-native";
import HomeHeader from "../pages/home/HomeHeader";

// Tests about search header should be here
describe('Search Header', () => {
    const page = render(<HomeHeader />)

    it ('should render back button on header', () => {
        const loginButton = page.getByTestId('backButton')
    })

    it ('should render searchbar on header', () => {
        const loginButton = page.getByTestId('searchbar')
    })

    it ('should render filter button on header', () => {
        const loginButton = page.getByTestId('filterButton')
    })
})