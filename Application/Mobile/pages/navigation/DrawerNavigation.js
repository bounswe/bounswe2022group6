import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../profile/ProfileScreen';
import MessagesScreen from '../messages/MessagesScreen';
import AppNavigation from './AppNavigation';
import HomeScreen from '../home/HomeScreen';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView{...props} contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View>
                <DrawerItemList {...props} />
            </View>
            <DrawerItem
                label="Log Out"
                onPress={() => props.navigation.getParent().popToTop()}
                icon={
                    ({ focused, color, size }) => 
                    <Ionicons color={color} size={size} name={focused ? 'log-out' : 'log-out-outline'} />
                }
            />
        </DrawerContentScrollView>
    );
}

const DrawerNavigation = ({ navigation }) => {
    return (
        <Drawer.Navigator initialRouteName='Home' drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Home' component={HomeScreen} options={{
                title: 'Home',
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={size} color={color}
                    />
                ),
            }} />
            <Drawer.Screen name='Profile' component={ProfileScreen} options={{
                title: 'Profile',
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'person' : 'person-outline'}
                        size={size} color={color}
                    />
                ),
            }} />
            <Drawer.Screen name='Messages' component={MessagesScreen} options={{
                title: 'Messages',
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused? 'mail' : 'mail-outline'}
                        size={size} color={color}
                    />
                ),
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;