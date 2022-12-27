import React, {useState} from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'

// The top navigation bar of home feed
const SearchScreenHeader = (props) => {
    // Toggle filter pop-up
    const toggleFilterModal = () => {
        props.navigation.setParams({...props.route.params, filtersVisible: !props.route.params.filtersVisible})
    }

    const onChangeSearch = (newText) => {
        props.navigation.setParams({...props.route.params, searchQuery: (newText === '' ? null : newText)})
    }

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => props.navigation.pop()} testID='backButton'/>
            <Searchbar
                theme={{ roundness: 50 }}
                placeholder="Search posts, users..."
                onChangeText={onChangeSearch}
                value={props.route.params.searchQuery}
                style={styles.searchBar}
                inputStyle={styles.searchInput}
                autoFocus={true}
                onSubmitEditing={props.handleSearch}
                testID='searchbar'
            />
            <Appbar.Action icon="filter-variant" color="white" onPress={toggleFilterModal} testID='filterButton' />
        </Appbar.Header>
    );
}

export default SearchScreenHeader;

const styles = StyleSheet.create({
    searchBar: {
        flexGrow: 1,
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