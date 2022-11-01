/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text } from 'react-native';
import { LoginPage } from "../authantication/Login";
import DrawerNavigation from "./DrawerNavigation";
import ErrorScreen from "../error/ErrorScreen";
import HomeScreen from "../home/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen } from "../authantication/SignUpScreen"

const Stack = createNativeStackNavigator();

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