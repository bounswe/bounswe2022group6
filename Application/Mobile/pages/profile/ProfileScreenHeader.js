import React from "react";
import { Appbar, Button, Text  } from 'react-native-paper';
import { StyleSheet } from 'react-native'


const ProfileScreenHeader = (props) => {

    return(
        <Appbar.Header style={styles.topBar}>
            {props.options.title == 'Edit Profile' && 
            <Appbar.BackAction color="white" onPress={() => props.navigation.navigate('Profile')} />}
            {props.options.title == 'Profile' && 
            <Appbar.Action icon='menu' color="white" onPress={() => props.navigation.toggleDrawer()} />
            }
            <Appbar.Content title={props.options.title} />
            {props.options.title == 'Edit Profile' &&
            <Appbar.Action icon='content-save-outline' color="white" onPress={() => props.navigation.toggleDrawer()} />
            }
        </Appbar.Header>
    );
}

export default ProfileScreenHeader;

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBar: {
        width: '65%',
        height: '70%',
        borderWidth: 1,
        borderColor: '#0c5c5d',
        elevation: 5,
        backgroundColor: '#f7fafa',
    },
    rightContent: {
        flexDirection: 'row',
    },
    searchInput: {
        fontSize: 13,
    },
    logoContainer: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
});