import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage } from "../authantication/Login";
import SignUpScreen from "../authantication/SignUpScreen";
import DrawerNavigation from "./DrawerNavigation";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Navigator>
    )
}

export default AppNavigation;