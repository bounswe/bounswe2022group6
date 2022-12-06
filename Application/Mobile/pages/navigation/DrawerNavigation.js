/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileNavigation from '../navigation/ProfileNavigation';
import MessagesScreen from '../messages/MessagesScreen';
import HomeScreen from '../home/HomeScreen';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

// The content of the drawer
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView{...props} contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View>
                <DrawerItemList {...props} />
            </View>
            <DrawerItem
                label="Give Error"
                onPress={() => props.navigation.navigate('Error')}
                icon={
                    ({ focused, color, size }) =>
                        <Ionicons color={color} size={size} name={focused ? 'close' : 'close-outline'} />
                }
            />
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

// The main navigation after after logging in
const DrawerNavigation = (props) => {
    return (
        <Drawer.Navigator initialRouteName='Home Screen' drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Home Screen' component={HomeScreen} options={{ 
                title: 'Home Screen',
                headerShown: false,
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={size} color={color}
                    />
                ),
            }} />
            <Drawer.Screen name='ProfileNavigation' component={ProfileNavigation} options={{
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
                        name={focused ? 'mail' : 'mail-outline'}
                        size={size} color={color}
                    />
                ),
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;