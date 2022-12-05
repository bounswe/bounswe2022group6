import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList } from "react-native";
import { Portal, Dialog, Button, List } from "react-native-paper";
import { getLabels } from "../labelAPI";
import LabelFilter from "./LabelFilter";

const FilterModal = (props) => {
    //const [allLabels, setAllLabels] = useState(getLabels())
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
    //const [allFilters, setAllFilters] = useState([])
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
    const renderFilter = ({ item }) => <LabelFilter label={item} {...props} isChosen={chosenFilters && chosenFilters.labels && chosenFilters.labels.filter(e => e.labelID === item.labelID).length > 0 ? true : false} setChosenFilters={setChosenFilters} />;

    const renderFilters = ({ item }) => {
        return (
            <List.Accordion title={item.name} id={item.ID} left={(props2) => <List.Icon {...props2} icon={item.icon}></List.Icon>}>
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

    return (
        <Portal>
            <Dialog visible={props.route.params.filtersVisible} onDismiss={hideDialog} style={{ height: '70%' }}>
                <Dialog.Title>Filters</Dialog.Title>
                <Dialog.ScrollArea>
                    <List.AccordionGroup>
                        <FlatList
                            data={dummyFilters}
                            // data={allFilters}
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