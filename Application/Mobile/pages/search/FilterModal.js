import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList } from "react-native";
import { Portal, Dialog, Button, List, ActivityIndicator } from "react-native-paper";
import LabelFilter from "./LabelFilter";
import { BACKEND_URL } from '@env'

const FilterModal = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    // All filters
    const [allFilters, setAllFilters] = useState([])
    const hideDialog = () => props.navigation.setParams({ ...props.route.params, filtersVisible: false });
    const [chosenFilters, setChosenFilters] = useState(props.filters)
    const renderFilter = ({ item }) => <LabelFilter label={item} {...props} isChosen={chosenFilters && chosenFilters.labels && chosenFilters.labels.filter(e => e.labelID === item.labelID).length > 0 ? true : false} setChosenFilters={setChosenFilters} />;

    const renderFilters = ({ item, index }) => {
        return (
            <List.Accordion title={item.name} id={toString(index)} left={(props2) => <List.Icon {...props2} icon={item.icon}></List.Icon>}>
                {item.type === 'list' &&
                    <FlatList
                        data={item.content}
                        renderItem={renderFilter}
                    />
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
    // HTTP request for all the labels in the server:
    const getLabels = async () => {
        try {
            const response = await fetch(BACKEND_URL + 'contmgr/labels/');
            const json = await response.json();
            return {name: 'Labels', icon: 'label', content: json.labels, type: 'list'}
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        getLabels().then((labels) => {setAllFilters([labels])})
    }, [])

    return (
        <Portal>
            <Dialog visible={props.route.params.filtersVisible} onDismiss={hideDialog} style={{ height: '70%' }}>
                <Dialog.Title>Filters</Dialog.Title>
                <Dialog.ScrollArea>
                        <List.AccordionGroup>
                            <FlatList
                            data={allFilters}
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

export default FilterModal;