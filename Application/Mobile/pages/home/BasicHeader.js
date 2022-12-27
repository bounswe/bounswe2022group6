import React from "react";
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'
import { editPostRequest } from "../postAPI";

// Header for Profile and Profile Edit pages
const Post_ChatbotHeader = (props) => {

    const handleEditPost = async () => {
        Object.keys(props.info).forEach((key) => {
            if ((key === "title" || key === "description") && (props.info[key] === null || props.info[key] === "")) {
                alert(key + " can not be empty!")
                return
            }
            if (props.info[key] === props.route.params.post[key]) {
                delete props.info[key]
            }
        });

        if (props.info.length !== 0) {
            
            const response =  await editPostRequest(props.info, props.route.params.post.postID)
            alert(response.info)
            props.navigation.pop() // Pop back to profile page
        }
    }
    
    // Render an appbar
    return (
        <Appbar.Header style={styles.topBar}>
            <Appbar.BackAction color="white" onPress={() => props.navigation.pop()} />
            <Appbar.Content title={props.options.headerTitle} />
            {
                props.options.headerTitle === "Edit Post" &&
                <Appbar.Action icon="content-save-outline" onPress={handleEditPost} />
            }
        </Appbar.Header>
    );
}

export default Post_ChatbotHeader;

// Styles
const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});