import React from "react";
import { Text, Button } from "react-native-paper";
import { View } from "react-native";

// The page to create a new post
const CreatePost = ({ navigation }) => {

    return (
        <View style={{ alignItems: 'center' }}>
            <Text>This will be create post page.</Text>
            <Button onPress={() => navigation.pop()}>Go back!</Button>
        </View>
    );
}

export default CreatePost;