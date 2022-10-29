import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../profile/ProfileScreen';
import MessagesScreen from '../messages/MessagesScreen';
import Footer from '../navigation/Footer';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
    const main_navigation = navigation.getParent()
    return (
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text>
                Home feed will be here.
            </Text>
        </View>
    )
}

export default HomeScreen;