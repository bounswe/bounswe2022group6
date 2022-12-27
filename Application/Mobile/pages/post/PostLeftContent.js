import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

// The content on the left of username
const PostLeftContent = (props) => {
    return (
        <TouchableOpacity onPress={() => console.log('Clicked profile photo')}>
            <Avatar.Image {...props} source={{ uri: (props.post.owner.profile_picture ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')  }} />
        </TouchableOpacity>
    );
}

export default PostLeftContent;