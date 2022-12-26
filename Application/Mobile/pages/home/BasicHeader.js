import React from "react";
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'

// Header for Profile and Profile Edit pages
const Post_ChatbotHeader = (props) => {

    // Render an appbar
    return (
        <Appbar.Header style={styles.topBar}>
            <Appbar.BackAction color="white" onPress={() => props.navigation.pop()} />
            <Appbar.Content title={props.options.headerTitle} />
            {
                props.options.headerTitle === "Edit Post" &&
                <Appbar.Action icon="content-save-outline" onPress={() => {}} />
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