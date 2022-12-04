import React, { useEffect, useState } from "react";
import { Chip, Card, Text, TextInput, Searchbar } from "react-native-paper";
import { ScrollView, View, StyleSheet } from "react-native";



const dummyLabels = [{ text: 'Skin Issues', color: '#e64a19' }, { text: 'Rashes', color: '#e64a19' }, { text: 'Freckles', color: '#e64a19' }]


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

// The page to create a new post
const CreatePost = ({ navigation }) => {

    const [title, setTitle] = useState("");
    const [descript, setDescript] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(true);
    const [searchedLabels, setSearchedLabels] = useState([]);
    const [predictedLabels, setPredictedLabels] = useState([]);
    const [selectedLabels, setSelectedLabels] = useState([]);

    useEffect(() => {}, [searchLabels, predictedLabels])

    const handleSelectLabel = (label) => {
        console.log(selectedLabels)
        if (selectedLabels.find(a => a.text == label.text)) {
            setSelectedLabels(selectedLabels.filter(item => item.text !== label.text))
        } else{
            setSelectedLabels(selectedLabels => [...selectedLabels, label])
        }
    }

    return (
        <ScrollView>
            <View style={styles.view}>
                <TextInput label="Title" autoFocus={true} onEndEditing={(e) => { decideOnLabels(e.nativeEvent.text, setPredictedLabels, setShowSearchBar) }} onChange={(e) => { setTitle(e.target.value) }} placeholder="Please shortly explain your issue" ></TextInput>
                <TextInput label="Description" multiline numberOfLines={8} placeholder="Provide further information, describing the symptoms and adding related visuals may help others to inspect the situation better." ></TextInput>

                {predictedLabels.length ?
                    <>
                        <Text style={styles.text} >Adding labels are important to get attention. We tought that you may add some of the labels below.</Text>
                        <Card.Content style={styles.labelContainer}>
                            {predictedLabels.map(label => (
                                <Chip onPress={() => {handleSelectLabel(label)}} key={label.text} style={{ ...styles.label, borderColor: label.color }} textStyle={{ color: label.color }} mode='outlined'>{label.text}</Chip>
                            ))}
                            <Chip onPress={() => { setSearchedLabels([]); setShowSearchBar(true); setPredictedLabels([]) }} key={"Search"} style={{ ...styles.label, borderColor: "#e64a19" }} textStyle={{ color: "#e64a19" }} mode='outlined'>Search</Chip>

                        </Card.Content>
                    </>
                    : <>
                        <Text style={styles.text} >Adding labels are important to get attention.</Text>
                    </>
                }

                {showSearchBar && <>
                    <Searchbar style={{marginBottom: "5%", backgroundColor: "#DCDCDC"}} onEndEditing={(e) => { searchLabels(e.nativeEvent.text, setSearchedLabels) }} />
                    <Card.Content style={styles.labelContainer}>
                        {searchedLabels.map(label => (
                            <Chip onPress={() => {handleSelectLabel(label)}} key={label.text} style={{ ...styles.label, borderColor: label.color }} textStyle={{ color: label.color }} mode='outlined'>{label.text}</Chip>
                        ))}
                    </Card.Content>
                </>
                }

                {selectedLabels.length ? <>
                    <Text style={styles.text}> Selected Labels </Text>
                    <Card.Content style={styles.labelContainer}>
                        {selectedLabels.map(label => (
                            <Chip onPress={() => {handleSelectLabel(label)}} key={label.text} style={{ ...styles.label, borderColor: label.color }} textStyle={{ color: label.color }} mode='outlined'>{label.text}</Chip>
                        ))}
                    </Card.Content>
                </> : <></>
                }

            
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
    }
});

export default CreatePost;