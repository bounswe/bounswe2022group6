import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../profile/ProfileScreen";
import EditProfileScreen from "../profile/EditProfileScreen";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//const Stack = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}} />
            <Stack.Screen name='EditProfile' component={EditProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation;