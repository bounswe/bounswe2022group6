/* eslint-disable prettier/prettier */
import React from "react";
import LoginPage from "../authentication/Login";
import DrawerNavigation from "./DrawerNavigation";
import ErrorScreen from "../error/ErrorScreen";
import HomeScreen from "../home/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen } from "../authentication/SignUpScreen"

const Stack = createNativeStackNavigator();

// Main navigation of the application (stack navigation)
const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
            <Stack.Screen name="Error" component={ErrorScreen} />
            <Stack.Screen name="Home Screen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigation;