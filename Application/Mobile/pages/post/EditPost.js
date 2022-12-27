import React, { useCallback, useEffect, useState } from "react";
import { Button, TextInput, Text, Subheading, IconButton, Dialog, Portal, Chip } from "react-native-paper";
import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import S3StorageUpload from "../components/PhotoUpload";
import { useFocusEffect } from "@react-navigation/native";
import { BACKEND_URL } from '@env'
import Post_ChatbotHeader from "../home/BasicHeader";

const dummyLabels = [{ text: 'Skin Issues', color: '#e64a19' }, { text: 'Rashes', color: '#e64a19' }, { text: 'Freckles', color: '#e64a19' }]

// The page to create a new post
const EditPost = (props) => {

    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState(props.route.params.post.title);
    const [descript, setDescript] = useState(props.route.params.post.description);
    const [type, setType] = useState(props.route.params.post.type);
    const [currentLabels, setCurrentLabels] = useState(props.route.params.post.labels);
    const [allLabels, setAllLabels] = useState(null);
    const [chosenLabels, setChosenLabels] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useFocusEffect(
        useCallback(() => {
            let isActive = true
            const fetchData = async () => {
                try {
                    response = await fetch(BACKEND_URL + "contmgr/labels/")
                    json = await response.json()
                    return json
                } catch (error) {
                    console.log("Error: " + error)
                }
            }
            fetchData()
                .then((response) => {
                    if (isActive)
                        setAllLabels(response.labels)
                })
            return () => { isActive = false }
        }, [])
    );

    useEffect(() => {
        props.navigation.setOptions({
            header: (props) => <Post_ChatbotHeader {...props} info={{ title: title, description: descript, labels: currentLabels }} />
        });
    }, [props.navigation, title, descript, currentLabels]);

    const clearFilters = () => {
        setCurrentLabels([])
    }
    const selectItem = (item) => {
        setCurrentLabels((oldLabels) =>
        oldLabels.filter(label => label.labelID === item.labelID).length === 1 ? oldLabels.filter(label => label.labelID !== item.labelID) : [...oldLabels, item])
    }
    return (
        <ScrollView>
            <View style={styles.view}>
                <TextInput label="Title" value={title} onChangeText={(t) => { setTitle(t) }} placeholder="Please shortly explain your issue" ></TextInput>
                <TextInput label="Description" value={descript} onChangeText={(t) => { setDescript(t) }} multiline numberOfLines={8} placeholder="Provide further information, describing the symptoms and adding related visuals may help others to inspect the situation better." />
            </View>
            <View>
                <Subheading>Labels:</Subheading>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <IconButton icon='plus' onPress={() => { setIsVisible(true) }}></IconButton>
                    {currentLabels.map((item) => <View style={{flexDirection: 'row'}}>
                        <Chip
                            key={item.labelID}
                            style={{ ...styles.label, borderColor: item.labelColor, marginTop: 8 }}
                            textStyle={{ color: item.labelColor }}
                            mode='outlined'
                            selected={currentLabels.filter((label) => label.labelID === item.labelID).length === 1}
                            onPress={() => selectItem(item)}
                        >
                            {item.labelName}
                        </Chip>
                        </View>)}
                </View>
                <Portal>
                <Dialog visible={isVisible} onDismiss={() => {setIsVisible(false)}} style={{ height: '70%' }}>
                <Dialog.Title>Labels</Dialog.Title>
                <Dialog.ScrollArea>
                    <FlatList 
                    data={allLabels}
                    renderItem={({item}) =>
                        <View style={{flexDirection: 'row'}}>
                        <Chip
                        
                            style={{ ...styles.label, borderColor: item.labelColor, marginTop: 8 }}
                            textStyle={{ color: item.labelColor }}
                            mode='outlined'
                            selected={currentLabels.filter((label) => label.labelID === item.labelID).length === 1}
                            onPress={() => selectItem(item)}
                        >
                            {item.labelName}
                        </Chip>
                        </View>
                    }
                    />
                </Dialog.ScrollArea>
                <Dialog.Actions>
                    <Button onPress={clearFilters}>Clear</Button>
                    <Button onPress={() => {setIsVisible(false)}}>Close</Button>
                </Dialog.Actions>
            </Dialog>
                </Portal>
            </View>
        </ScrollView>
    );
}


export default EditPost

// Styles
const styles = StyleSheet.create({
    label: {
        marginRight: 5,
        borderWidth: 0.75,
    },
});