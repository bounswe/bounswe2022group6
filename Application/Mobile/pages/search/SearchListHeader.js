import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Chip, List, Title, Subheading } from "react-native-paper";
import FilterModal from "./FilterModal";

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

export default SearchListHeader;

const styles = StyleSheet.create({
    label: {
        marginRight: 5,
        borderWidth: 0.75,
    },
});