import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import S3StorageUpload from "../components/PhotoUpload";
import { useFocusEffect } from "@react-navigation/native";
import { BACKEND_URL } from '@env'
import Post_ChatbotHeader from "../home/BasicHeader";

const dummyLabels = [{ text: 'Skin Issues', color: '#e64a19' }, { text: 'Rashes', color: '#e64a19' }, { text: 'Freckles', color: '#e64a19' }]

// The page to create a new post
const EditPost = (props) => {

    console.log(props.route.params.post)
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState(props.route.params.post.title);
    const [descript, setDescript] = useState(props.route.params.post.description);
    const [type, setType] = useState(props.route.params.post.type);
    const [currentLabels, setCurrentLabels] = useState(props.route.params.post.labels);
    const [allLabels, setAllLabels] = useState(null);
    const [chosenLabels, setChosenLabels] = useState([]);

    const handleUrl = (e) => {
        setFileUrl(e)
    }

    useEffect(() => {
        props.navigation.setOptions({
            header: (props) => <Post_ChatbotHeader {...props} info={{title: title, description: descript}} />
        });
    }, [props.navigation, title, descript]);

    return (
        <ScrollView>
            <View style={styles.view}>
                <TextInput label="Title" value={title} onChangeText={(t) => { setTitle(t) }} placeholder="Please shortly explain your issue" ></TextInput>
                <TextInput label="Description" value={descript} onChangeText={(t) => { setDescript(t) }} multiline numberOfLines={8} placeholder="Provide further information, describing the symptoms and adding related visuals may help others to inspect the situation better." />
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