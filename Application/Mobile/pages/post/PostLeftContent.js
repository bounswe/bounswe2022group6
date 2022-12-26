import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

// The content on the left of username
const PostLeftContent = (props) => {
    return (
        <TouchableOpacity onPress={() => console.log('Clicked profile photo')}>
            <Avatar.Icon {...props} icon='account' /* source={{ uri: props.profile }} */ />
            {/* <Avatar.Image {...props} source={{ uri: props.profile }} /> */}
        </TouchableOpacity>
    );
}

export default PostLeftContent;