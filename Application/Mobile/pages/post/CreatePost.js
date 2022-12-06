import React, { useEffect, useState } from "react";
import { Chip, Card, Text, TextInput, Searchbar } from "react-native-paper";
import { Alert, ScrollView, View, StyleSheet, Image, Button } from "react-native";
import S3StorageUpload from "../components/PhotoUpload";
import { handleCreatePost } from "../postAPI";

const dummyLabels = [{ text: 'Skin Issues', color: '#e64a19' }, { text: 'Rashes', color: '#e64a19' }, { text: 'Freckles', color: '#e64a19' }]

// The page to create a new post
const CreatePost = ({  }) => {

    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("");
    const [descript, setDescript] = useState("");
    const [type, setType] = useState("t");
    const [showSearchBar, setShowSearchBar] = useState(true);
    const [searchedLabels, setSearchedLabels] = useState([]);
    const [predictedLabels, setPredictedLabels] = useState([]);
    const [selectedLabels, setSelectedLabels] = useState([]);
    const [fileUrl, setFileUrl] = useState("");

    const getLabels = async () => {
        try {
            const response = await fetch(BACKEND_URL + 'contmgr/labels/');
            const json = await response.json();
            setLoading(false);
            return { name: 'Labels', icon: 'label', content: json.labels, type: 'list' }
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        // if (!labels.length)
        //     setLabels(getLabels())
    }, [searchLabels, predictedLabels, fileUrl])



    const asyncAlert = () => { 
        return new Promise((resolve, reject) => {
            Alert.alert("NSFW", "Is photo NSFW ?", [{ text: "NSFW", onPress: () => { resolve(true) } }, { text: "Not NSFW", onPress: () => { resolve(false) } }])
        })
    }

    const handleCreatePostSubmit = async () => {
        let NSFW = false;
        if (fileUrl) {
            // Alert.alert("NSFW", "Is photo NSFW ?", [{ text: "NSFW", onPress: () => { NSFW = true } }, { text: "Not NSFW", onPress: () => { NSFW = false } }])
            NSFW = await asyncAlert();
            let response = await handleCreatePost(title, type, descript, "", fileUrl.replace("https://", ""), NSFW)
            if (response)
                alert("Post Created Successfully!")
                
        }
        else {
            let response = await handleCreatePost(title, type, descript, "", fileUrl, NSFW)
            alert("Post Created Successfully!")
        }
    }

    const handleSelectLabel = (label) => {
        if (selectedLabels.find(a => a.text == label.text)) {
            setSelectedLabels(selectedLabels.filter(item => item.text !== label.text))
        } else {
            setSelectedLabels(selectedLabels => [...selectedLabels, label])
        }
    }

    const decideOnLabels = (title, setPredictedLabels, setShowSearchBar) => {
        if (title) {
            let arr = []
            title = title.split();
            dummyLabels.map(label => {
                title.map(tit => {
                    if (label.text.toLowerCase().includes(tit.toLowerCase())) {
                        arr.push(label)
                    }
                })
            })
            setPredictedLabels(arr)
            if (arr.length) setShowSearchBar(false)
        }
    }

    const searchLabels = (searchKey, setSearchedLabels) => {
        if (searchKey.length) {
            setSearchedLabels(dummyLabels)
        } else {
            setSearchedLabels([])
        }
    }

    const handleUrl = (e) => {
        setFileUrl(e)
    }

    return (
        <ScrollView>
            <View style={styles.view}>
                <TextInput label="Title" autoFocus={true} onEndEditing={(e) => { setTitle(e.nativeEvent.text); decideOnLabels(e.nativeEvent.text, setPredictedLabels, setShowSearchBar) }} placeholder="Please shortly explain your issue" ></TextInput>
                <TextInput label="Description" onEndEditing={(e) => { setDescript(e.nativeEvent.text) }} multiline numberOfLines={8} placeholder="Provide further information, describing the symptoms and adding related visuals may help others to inspect the situation better." ></TextInput>

                {predictedLabels.length ?
                    <>
                        <Text style={styles.text} >Adding labels are important to get attention. We tought that you may add some of the labels below.</Text>
                        <Card.Content style={styles.labelContainer}>
                            {predictedLabels.map(label => (
                                <Chip onPress={() => { handleSelectLabel(label) }} key={label.text} style={{ ...styles.label, borderColor: label.color }} textStyle={{ color: label.color }} mode='outlined'>{label.text}</Chip>
                            ))}
                            <Chip onPress={() => { setSearchedLabels([]); setShowSearchBar(true); setPredictedLabels([]) }} key={"Search"} style={{ ...styles.label, borderColor: "#e64a19" }} textStyle={{ color: "#e64a19" }} mode='outlined'>Search</Chip>

                        </Card.Content>
                    </>
                    : <>
                        <Text style={styles.text} >Adding labels are important to get attention.</Text>
                    </>
                }

                {showSearchBar && <>
                    <Searchbar style={{ marginBottom: "5%", backgroundColor: "#DCDCDC" }} onEndEditing={(e) => { searchLabels(e.nativeEvent.text, setSearchedLabels) }} />
                    <Card.Content style={styles.labelContainer}>
                        {searchedLabels.map(label => (
                            <Chip onPress={() => { handleSelectLabel(label) }} key={label.text} style={{ ...styles.label, borderColor: label.color }} textStyle={{ color: label.color }} mode='outlined'>{label.text}</Chip>
                        ))}
                    </Card.Content>
                </>
                }

                {selectedLabels.length ? <>
                    <Text style={styles.text}> Selected Labels </Text>
                    <Card.Content style={styles.labelContainer}>
                        {selectedLabels.map(label => (
                            <Chip onPress={() => { handleSelectLabel(label) }} key={label.text} style={{ ...styles.label, borderColor: label.color }} textStyle={{ color: label.color }} mode='outlined'>{label.text}</Chip>
                        ))}
                    </Card.Content>
                </> : <></>
                }

                {fileUrl ? <>
                    <Text style={styles.text}> Image Uploaded </Text>
                    <Image style={styles.image} resizeMode={'contain'} source={{ uri: fileUrl }}></Image>
                    <Text style={styles.text}>  </Text>
                </>
                    : <>
                        <S3StorageUpload setPhotoUrl={handleUrl} ></S3StorageUpload>
                        <Text style={styles.text}>  </Text>
                    </>
                }

                <Button style={styles.button} color="#0f7375" onPress={handleCreatePostSubmit} title="Create Post!"></Button>

            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    view: {
        paddingBottom: '25%',
        padding: '2%'
    },
    labelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1%'
    },
    label: {
        marginRight: 5,
        borderWidth: 0.75,
    },
    text: {
        padding: '2%',
        fontWeight: '200',
        color: "primary"
    },
    image: {
        width: "100%", resizeMode: "contain", height: undefined, aspectRatio: 1,
    },
});


export default CreatePost