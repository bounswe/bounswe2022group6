import React, { useState } from "react";
import { Text, Button, TextInput } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";

// The page to create a new post
const Chatbot = ({ navigation }) => {

    const [messages, setMessages] = useState(["Hello, how can i help you?"]);
    const [options, setOptions] = useState(["I don't feel good", "I want to search a medicine"]);


    const decideRoute = (message) => {

        if (message == "I don't feel good") {
            setMessages(messages => [...messages, "What's wrong with you ?"])
            setOptions(["Headache", "Stress", "Cancer"])
        } else if (message == "I want to search a medicine") {
            setMessages(messages => [...messages, "What is the name of the medicine ?"])
            setOptions(["Input"])
        } else if (message == "Stress") {
            setMessages(messages => [...messages, "You should sleep for 10 hours a day!"])
            setOptions(["Thank You", "Thanks a Lot", "You are perfect!"])
        } else if (message == "You are perfect!") {
            setMessages(messages => [...messages, "No you are perfect!"])
            setOptions([])
        } else {
            setMessages(messages => [...messages, "I'll search " + message + " for you"])
            setOptions(["Thank You", "Thanks a Lot", "You are perfect!"])
        }

    }

    return (
        <>
            <View style={styles.body}>
                {messages.map(message => (
                    <View style={{ backgroundColor: "#c2cd23", justifyContent: "center", flex: 0.1 }} >
                        <Text style={{ fontSize: 22, textAlign: "center" }} >{message}</Text>
                    </View>
                ))}
            </View>
            {options.map(message => message == "Input" ? <TextInput mode="outlined" onEndEditing={(e) => { decideRoute(e.nativeEvent.text) }} ></TextInput> : (
                <View style={{ backgroundColor: "#95c3b3", justifyContent: "center", flex: 0.1 }} >
                    <Text onPress={() => { decideRoute(message) }} style={{ fontSize: 16, textAlign: "center" }} >{message}</Text>
                </View>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        //flexGrow: 1,
        justifyContent: 'flex-start',
        margin: '5%',
    },
    logo: {
        alignSelf: 'center',
    },
    main: {
        marginVertical: '10%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '49%',
    },
})

export default Chatbot;