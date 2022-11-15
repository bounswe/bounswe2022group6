import React from "react";
import { Text, Button } from "react-native-paper";
import { View } from "react-native";

// The page to create a new post
const Chatbot = ({ navigation }) => {

    return (
        <View style={{ alignItems: 'center' }}>
            <Text>This will be ChatBot page.</Text>
            <Button onPress={() => navigation.pop()}>Go back!</Button>
        </View>
    );
}

export default Chatbot;