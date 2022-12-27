import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'

// The top navigation bar of home feed
const HomeHeader = (props) => {

    return (
        <Appbar.Header style={styles.topBar} testID='topBar'>
            <Appbar.Action icon="menu" color="white" onPress={() => props.navigation.toggleDrawer()} testID='menuButton'/>
            <View style={styles.logoContainer}>
                <Appbar.Action style={styles.logo} color ='white' icon={require('../../images/logo.png')} testID='logo'
                />
            </View>
            <View style={styles.rightContent}>
                <Appbar.Action icon="magnify" color='white' onPress={() => props.navigation.navigate('Search', {username: props.route.params.username})} testID='searchButton/>
                <Appbar.Action icon="robot-happy" color='white' onPress={() => props.navigation.navigate('Chatbot')} testID='chatBotButton'/>
            </View>
        </Appbar.Header>
    );
}

export default HomeHeader;

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