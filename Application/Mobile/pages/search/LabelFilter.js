import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";

const LabelFilter = (props) => {
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

export default LabelFilter;

// Styles
const styles = StyleSheet.create({
    label: {
        marginRight: 5,
        borderWidth: 0.75,
    },
});