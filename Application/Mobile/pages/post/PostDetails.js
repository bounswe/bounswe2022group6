import React from "react";
import { Text, Button } from "react-native-paper";
import { View } from "react-native";

// The details screen of a post
const PostDetails = ({ route, navigation }) => {
    const { username, title, description } = route.params

    return (
        <View style={{ alignItems: 'center' }}>
            <Text>This will be post details.</Text>
            <Text>username:</Text>
            <Text>{username}</Text>
            <Text>title:</Text>
            <Text>{title}</Text>
            <Text>description:</Text>
            <Text>{description}</Text>
            <Button onPress={() => navigation.pop()}>Go back!</Button>
        </View>
    );
}

export default PostDetails;