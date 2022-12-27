/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../profile/ProfileScreen";
import EditProfileScreen from "../profile/EditProfileScreen";
import ProfileScreenHeader from "../profile/ProfileScreenHeader";

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{header: (props) => <ProfileScreenHeader {...props} />, animation: 'slide_from_right', unmountOnBlur: true}}>
            <Stack.Screen name='Profile' component={ProfileScreen} options={{title: 'Profile'}}/>
            <Stack.Screen name='Edit Profile' component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation;