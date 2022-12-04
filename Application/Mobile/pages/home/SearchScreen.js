import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Portal, Dialog, Button, Chip, List, Snackbar, Title, Subheading } from "react-native-paper";
import SearchScreenHeader from "./SearchScreenHeader";
import PostPreview from "../post/PostPreview";

const SearchListHeader = (props) => {
    const renderLabel = ({ item }) => <Chip style={{ ...styles.label, borderColor: item.labelColor, marginTop: 8 }} textStyle={{ color: item.labelColor }} mode='outlined'>{item.labelName}</Chip>;
    return (
        <View>
            {props.filters &&
                <List.Accordion title={<Subheading>Applied Filters</Subheading>}>
                    {props.filters.labels &&
                        <View>
                            <List.Subheader>Labels</List.Subheader>
                            <FlatList
                                style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginHorizontal: 10}}
                                data={props.filters.labels} // TODO: Change this mock data.
                                renderItem={renderLabel}
                                keyExtractor={item => item.labelID}
                            />
                        </View>
                    }
                </List.Accordion>
            }
            {
                props.searched &&
                <Title>Search Results:</Title>
            }
            <FilterModal {...props} />
        </View>
    );
}

const Label = (props) => {
    const [isSelected, setIsSelected] = useState(props.isChosen);

    const addLabelToFilters = (newLabel) => {
        props.setChosenFilters(oldFilter => (oldFilter ? { ...oldFilter, labels: [...oldFilter.labels, newLabel] } : { labels: [newLabel] }))
    };
    const removeLabelFromFilters = (label) => {
        props.setChosenFilters(oldFilter => {
            if (oldFilter) {
                var newFilter = {}
                if (oldFilter.labels) {
                    newFilter = { ...oldFilter, labels: oldFilter.labels.filter((element) => element.labelID != label.labelID) }
                    if (newFilter.labels.length === 0) {
                        delete newFilter.labels
                    }
                }
                if (Object.keys(newFilter).length === 0) {
                    newFilter = null
                }
                return newFilter;
            } else {
                return null;
            }
        })
    };

    const toggleSelected = () => {
        if (isSelected) {
            setIsSelected(false)
            removeLabelFromFilters(props.label)
        } else {
            setIsSelected(true)
            addLabelToFilters(props.label)
        }
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <Chip
                style={{ ...styles.label, borderColor: props.label.labelColor, marginTop: 8 }}
                textStyle={{ color: props.label.labelColor }}
                mode='outlined'
                selected={isSelected}
                onPress={toggleSelected}
            >
                {props.label.labelName}
            </Chip>
        </View>
    );
}

const FilterModal = (props) => {
    // All labels
    const dummyLabels = [
        {
            "labelID": 1,
            "labelName": "Orthopedy",
            "labelType": "f",
            "labelColor": "#ad901a",
            "parentLabel": null
        },
        {
            "labelID": 2,
            "labelName": "Cardiology",
            "labelType": "f",
            "labelColor": "#1aad1c",
            "parentLabel": 1
        },
        {
            "labelID": 3,
            "labelName": "Question",
            "labelType": "f",
            "labelColor": "#1a4ead",
            "parentLabel": 1
        },
        {
            "labelID": 4,
            "labelName": "Dermatology",
            "labelType": "f",
            "labelColor": "#ad1a46",
            "parentLabel": 1
        },
        {
            "labelID": 5,
            "labelName": "Pharmacology",
            "labelType": "f",
            "labelColor": "#501aad",
            "parentLabel": 1
        }
    ];
    // All filters
    const dummyFilters = [
        {
            ID: "1",
            name: 'Labels',
            content: dummyLabels,
            type: 'list',
            icon: 'label'
        },
    ]
    const hideDialog = () => props.navigation.setParams({ ...props.route.params, filtersVisible: false });
    const [chosenFilters, setChosenFilters] = useState(props.filters)
    const renderFilter = ({ item }) => <Label label={item} {...props} isChosen={chosenFilters && chosenFilters.labels && chosenFilters.labels.filter(e => e.labelID === item.labelID).length > 0 ? true : false} setChosenFilters={setChosenFilters} />;

    const renderFilters = ({ item }) => {
        return (
            <List.Accordion title={item.name} id={item.ID} left={(props2) => <List.Icon {...props2} icon={item.icon}></List.Icon>}>
                {item.type === 'list' &&
                    <FlatList
                        data={item.content}
                        renderItem={renderFilter}
                    />
                }
                {item.type === 'input' &&
                    <List.Item title={item.name} />
                }

            </List.Accordion>
        );
    }
    const applyFilters = () => {
        props.setFilters(chosenFilters);
        hideDialog();
    }
    const resetFilters = () => {
        props.setFilters(null);
        hideDialog();
    }
    return (
        <Portal>
            <Dialog visible={props.route.params.filtersVisible} onDismiss={hideDialog} style={{ height: '70%' }}>
                <Dialog.Title>Filters</Dialog.Title>
                <Dialog.ScrollArea>
                    <List.AccordionGroup>
                        <FlatList
                            data={dummyFilters}
                            renderItem={renderFilters}
                        />
                    </List.AccordionGroup>
                </Dialog.ScrollArea>
                <Dialog.Actions>
                    <Button onPress={resetFilters}>Reset</Button>
                    <Button onPress={hideDialog}>Cancel</Button>
                    <Button onPress={applyFilters}>Apply</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

const SearchScreen = (props) => {

    const [searchResults, setSearchResults] = useState(null);
    // Current filters:
    const [filters, setFilters] = useState(null);
    const handleSearch = () => {
        // TODO: Send request
        // TODO: Get response
        if (props.route.params.searchQuery != null && filters != null) { // Both query and filter
            const dummyResponse1 = [
                {
                    key: 1, postTitle: 'I pulled shoulder. This is a day after bowling',
                    postAuthor: 'nevermindever42',
                    authorProfilePhoto: 'https://randomuser.me/api/portraits/men/60.jpg',
                    cardCover: 'https://preview.redd.it/qenk7995rwn41.jpg?width=640&crop=smart&auto=webp&s=c98f07f965ca5b304dfa59c02baf6133a0f4a17e',
                    upvote: 22,
                    downvote: 1,
                    comment: 7,
                    labels: [{ text: 'Pain Lvl 4-6', color: '#d32f2f' }],
                    nsfw: true,
                    cardContent: 'Search results obtained from both keyword search and filters.'
                },
                {
                    key: 2, postTitle: 'What are these small bumps? It seems to be increasing and spreading',
                    postAuthor: 'neuraljamkoala',
                    authorProfilePhoto: 'https://randomuser.me/api/portraits/women/43.jpg',
                    cardCover: 'https://preview.redd.it/sn5tuiokujz91.jpg?width=640&crop=smart&auto=webp&s=ad0aa3429c384ce07a6fbdf5253d540f1f9ee33d',
                    upvote: 10,
                    downvote: 1,
                    comment: 2,
                    nsfw: false,
                    labels: [{ text: 'Skin Issues', color: '#e64a19' }, { text: 'Rashes', color: '#e64a19' }, { text: 'Freckles', color: '#e64a19' }],
                },
            ]
            setSearchResults(dummyResponse1)
        }
        else if (props.route.params.searchQuery != null && filters == null) { // Only query
            const dummyResponse2 = [
                {
                    key: 6, postTitle: 'I had an MRI and I have been worried about this hole. Is it normal?',
                    postAuthor: 'pleasant_peach',
                    authorProfilePhoto: 'https://randomuser.me/api/portraits/women/50.jpg',
                    cardCover: 'https://preview.redd.it/m6e8mhf19dr61.jpg?width=640&crop=smart&auto=webp&s=978d17f0850e92bcabaa714c44535a85d6fd2e35',
                    upvote: 2,
                    downvote: 4,
                    comment: 3,
                    nsfw: false,
                    cardContent: 'Search results obtained only from keyword search.',
                    labels: [{ text: 'Brain', color: '#1976d2' }]
                },
            ]
            setSearchResults(dummyResponse2)
        }
        else if (props.route.params.searchQuery === null && filters != null) { // Only filter
            const dummyResponse3 = [
                {
                    key: 1, postTitle: 'I pulled shoulder. This is a day after bowling',
                    postAuthor: 'nevermindever42',
                    authorProfilePhoto: 'https://randomuser.me/api/portraits/men/60.jpg',
                    cardCover: 'https://preview.redd.it/qenk7995rwn41.jpg?width=640&crop=smart&auto=webp&s=c98f07f965ca5b304dfa59c02baf6133a0f4a17e',
                    upvote: 22,
                    downvote: 1,
                    comment: 7,
                    labels: [{ text: 'Pain Lvl 4-6', color: '#d32f2f' }],
                    nsfw: true,
                    cardContent: 'It is not as bad as it seems.\nSearch results obtained only from filters.'
                },
            ]
            setSearchResults(dummyResponse3)
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
        handleSearch(); // handle search after search query and filters are updated
    }, [props.navigation, props.route.params.searchQuery, filters]);

    // Render
    return (
        <View>
            {searchResults === null &&
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Text style={{ color: 'gray' }}>You can search for posts and users here!</Text>
                </View>
            }
            <FlatList
                ListHeaderComponent={(props2) => <SearchListHeader {...props2} {...props} filters={filters} setFilters={setFilters} searched={searchResults != null} handleSearch={handleSearch} />}
                data={searchResults}
                renderItem={({ item }) => <PostPreview {...item} navigation={props.navigation} openSnackBar={openSnackBar} />}
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