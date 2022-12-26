/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileNavigation from '../navigation/ProfileNavigation';
import MessagesScreen from '../messages/MessagesScreen';
import HomeScreen from '../home/HomeScreen';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { handleLogoutRequest } from '../authAPI';

const Drawer = createDrawerNavigator();

// The content of the drawer
const CustomDrawerContent = (props) => {
    const handleLogout = () => {
        handleLogoutRequest().then(() => {
            props.navigation.getParent().popToTop()
        })
    }

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View>
                <DrawerItemList {...props} />
            </View>
            {props.username ?
                <DrawerItem
                    label="Log Out"
                    onPress={handleLogout}
                    icon={
                        ({ focused, color, size }) =>
                            <Ionicons color={color} size={size} name={focused ? 'log-out' : 'log-out-outline'} />
                    }
                />
                :
                <View>
                    <DrawerItem
                        label="Log In"
                        onPress={() => props.navigation.getParent().popToTop()}
                        icon={
                            ({ focused, color, size }) =>
                                <Ionicons color={color} size={size} name={focused ? 'log-in' : 'log-in-outline'} />
                        }
                    />
                    <DrawerItem
                        label="Sign Up"
                        onPress={() => props.navigation.getParent().navigate('Sign Up')}
                        icon={
                            ({ focused, color, size }) =>
                                <Ionicons color={color} size={size} name={focused ? 'person-add' : 'person-add-outline'} />
                        }
                    />
                </View>
            }
        </DrawerContentScrollView>
    );
}

// The main navigation after after logging in
const DrawerNavigation = (props) => {
    return (
        <Drawer.Navigator initialRouteName='Home Screen' drawerContent={props2 => <CustomDrawerContent {...props2} {...props.route.params} />} screenOptions={{unmountOnBlur: true}} >
            <Drawer.Screen name='Home Screen' component={HomeScreen} 
            initialParams={{...props.route.params}}
            options={{
                title: 'Home',
                headerShown: false,
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={size} color={color}
                    />
                ),
            }} />
            {props.route.params.username &&
                <Drawer.Group>
                    <Drawer.Screen name='ProfileNavigation' component={ProfileNavigation} options={{
                        title: 'Profile',
                        drawerIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? 'person' : 'person-outline'}
                                size={size} color={color}
                            />
                        ),
                        headerShown: false
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
                </Drawer.Group>
            }
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;