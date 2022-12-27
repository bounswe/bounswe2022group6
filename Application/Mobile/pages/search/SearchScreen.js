import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Snackbar } from "react-native-paper";
import SearchScreenHeader from "./SearchScreenHeader";
import PostPreview from "../post/PostPreview";
import SearchListHeader from "./SearchListHeader";
import { BACKEND_URL } from '@env'

const SearchScreen = (props) => {
    const [searchResults, setSearchResults] = useState(null);
    // Current filters:
    const [filters, setFilters] = useState(null);
    const handleSearchRequest = async () => {
        try {
            var out = []
            if (props.route.params.searchQuery) {
                out.push("keyword=" + encodeURIComponent(props.route.params.searchQuery))
            }
            if (filters) {
                if (filters.labels) {
                    for (const label of filters.labels) {
                        out.push("label=" + encodeURIComponent(label.labelName))
                    }
                }
            }
            const query = out.join('&')
            const response = await fetch(BACKEND_URL + '/contmgr/searchpost?' + query);
            const json = await response.json();
            return json.posts
        } catch (error) {
            console.error(error);
        }
    }
    const handleSearch = () => {
        if (props.route.params.searchQuery || filters ) { 
            handleSearchRequest().then((response) => {
                setSearchResults(response)
            })
        }
        else { // No search
            setSearchResults(null)
        }
    }

    // Snackbar
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const onDismissSnackBar = () => setSnackbarVisible(false);
    const openSnackBar = (message) => {
        setSnackbarMessage(message);
        setSnackbarVisible(true);
    }

    // Screen - header communication
    useEffect(() => {
        props.navigation.setOptions({
            header: (props) => <SearchScreenHeader {...props} setSearchResults={setSearchResults} />
        });
    }, [props.navigation]);

    useEffect(() => { // handle search after search query and filters are updated
        handleSearch();
    }, [props.route.params.searchQuery, filters])

    // Render
    return (
        <View style={{height: '100%'}}>
            {searchResults === null &&
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Text style={{ color: 'gray' }}>You can search for posts and users here!</Text>
                </View>
            }
            <FlatList
                ListHeaderComponent={(props2) => <SearchListHeader {...props2} {...props} filters={filters} setFilters={setFilters} searched={searchResults != null} handleSearch={handleSearch} />}
                data={searchResults}
                renderItem={({ item }) => <PostPreview {...props} post={item} navigation={props.navigation} openSnackBar={openSnackBar} />}
            />
            {/* Snackbar to inform about some events such as (un)blocking a user */}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Dismiss',
                    onPress: () => { onDismissSnackBar() },
                }}>
                {snackbarMessage}
            </Snackbar>
        </View>
    );
}

export default SearchScreen;

// Styles
const styles = StyleSheet.create({
    label: {
        marginRight: 5,
        borderWidth: 0.75,
    },
    searchInput: {
        fontSize: 13,
    },
    searchBar: {
        maxWidth: '90%',
        height: 50,
        alignSelf: 'center',
    },
});