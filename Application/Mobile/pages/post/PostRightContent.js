import React, { useState } from "react";
import { View } from "react-native";
import { Divider, IconButton, Menu } from "react-native-paper";

// The content on the right of username
const PostRightContent = (props) => {

    const toggleMenu = () => {setMenuVisible((old) => !old)}
    const [menuVisible, setMenuVisible] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const toggleBlocked = () => {setIsBlocked((old) => !old)}

    

    const handleBlockUser = () => {
        //TODO: block/unblock user.
        toggleMenu()
        const message = isBlocked ? 'User ' + props.post.owner.username + ' is unblocked!' : 'User ' + props.post.owner.username + ' is blocked!';
        toggleBlocked()
        props.openSnackBar(message);
    }

    const handleEditProfileButton = () => {
        toggleMenu()
        props.navigation.navigate('Edit Post', {post: (props.post ?? props.route.params.post)})
    }

    return (
        <Menu visible={menuVisible} onDismiss={() => setMenuVisible(false)} anchor={<IconButton disabled={props.route.params?.username === undefined} {...props} icon='dots-vertical' onPress={() => setMenuVisible(true)} />}>
            <Menu.Item icon='account-cancel-outline' onPress={handleBlockUser} title={isBlocked ? 'Unblock User' : 'Block User'} />
            <Divider />
            <Menu.Item icon='alert-octagon-outline' onPress={() => console.log('clicked report!')} title="Report" />
            {(props.post?.owner.username ?? props.route.params.post.owner.username) === props.route.params?.username === undefined&&
                <View>
                    <Divider />
                    <Menu.Item icon='pencil-outline' onPress={handleEditProfileButton} title="Edit Post" />
                </View>
            }
        </Menu>
    );
}

export default PostRightContent;