import React from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'

// The top navigation bar of home feed
const HomeHeader = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Appbar.Header style={styles.topBar}>
            <Appbar.Action icon="menu" color="white" onPress={() => props.navigation.toggleDrawer()} />
            <Searchbar
                theme={{roundness: 50}}
                placeholder="Search posts, users..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchBar}
                inputStyle={styles.searchInput}
                onSubmitEditing={() => console.log('You are searching: ' + searchQuery)}
            />
            <Appbar.Action icon="robot-happy" color='white' onPress={() => console.log('Clicked chatbot!')} />
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
    searchInput: {
        fontSize: 13,
    },
});