import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ExploreScreen from '../explore/ExploreScreen';
import MessagesScreen from '../messages/MessagesScreen';

const Tab = createMaterialBottomTabNavigator();
const Footer = () => {
    <Tab.Navigator initialRouteName='Explore'>
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
}

export default Footer;