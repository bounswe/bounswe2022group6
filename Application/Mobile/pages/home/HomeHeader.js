import React from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'

// The top navigation bar of home feed
const HomeHeader = ({navigation}) => {

    return (
        <Appbar.Header style={styles.topBar}>
            <Appbar.Action icon="menu" color="white" onPress={() => navigation.toggleDrawer()} />
        <View style={styles.rightContent}>
            <Appbar.Action icon="magnify" color='white' onPress={() => navigation.navigate('Search')} />
            <Appbar.Action icon="robot-happy" color='white' onPress={() => navigation.navigate('Chatbot')} />
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
    searchBar:  {
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
});