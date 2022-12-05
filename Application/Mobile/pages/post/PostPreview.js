import React, { useState } from "react";
import { Card, Avatar, Button, IconButton, Text, withTheme, Menu, Divider, Chip } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
//import AnimatedNumbers from 'react-native-animated-numbers';

// The content on the left of username
const LeftContent = (props) => {
    return (
        <TouchableOpacity onPress={() => console.log('Clicked profile photo')}>
            <Avatar.Image {...props} source={{ uri: props.profile }} />
        </TouchableOpacity>
    );
}

// The content on the right of username
const RightContent = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    const handleBlockUser = () => {
        //TODO: block/unblock user.
        const message = isBlocked ? 'User ' + props.author + ' is unblocked!' : 'User ' + props.author + ' is blocked!';
        setIsBlocked(!isBlocked);

        props.openSnackBar(message);
    }

    return (
        <Menu visible={menuVisible} onDismiss={() => setMenuVisible(false)} anchor={<IconButton {...props} icon='dots-vertical' onPress={() => setMenuVisible(true)} />}>
            <Menu.Item icon='account-cancel-outline' onPress={handleBlockUser} title={isBlocked ? 'Unblock User' : 'Block User'} />
            <Divider />
            <Menu.Item icon='alert-octagon-outline' onPress={() => console.log('clicked report!')} title="Report" />
        </Menu>
    );
}

// fields: theme, navigation, openSnackBar, nsfw, postAuthor, postTitle, cardContent, authorProfilePhoto, labels, cardCover, upvote, downvote
const PostPreview = (props) => {
    const { colors } = props.theme; // colors of the theme
    const [isNSFW, setIsNSFW] = useState(props.nsfw); // NSFW

    // Upvote & Downvote
    //TODO: the initial states should be taken from backend
    const [downVoted, setDownvoted] = useState(false);
    const [upVoted, setUpvoted] = useState(false);

    const handleDownvote = () => {
        setDownvoted(!downVoted);
        setUpvoted(false);
        //TODO: send request to downvote
    }
    const handleUpvote = () => {
        setUpvoted(!upVoted)
        setDownvoted(false)
        //TODO: send request to upvote
    }

    return (
        <Card style={styles.card} onPress={() => props.navigation.navigate('Post Details', {username: props.postAuthor, title: props.postTitle, description: props.cardContent})}>
            {/* Username, profile photo, post date etc. */}
            <Card.Title
                title={<Text onPress={() => console.log('clicked username')}>{props.postAuthor}</Text>}
                titleStyle={{fontSize: 14}}
                subtitle={<Text onPress={() => console.log('clicked date')}>{'yesterday'}</Text>} //TODO: take date data from props
                subtitleStyle={{fontSize: 12, color: 'red'}}
                left={(props2) => <LeftContent profile={props.authorProfilePhoto} {...props2} />}
                leftStyle={{alignSelf: 'center'}}
                right={(props2) => <RightContent {...props2} openSnackBar={props.openSnackBar} author={props.postAuthor} />}
            />
            {/* Post Labels */}
            {props.labels && <Card.Content style={styles.labelContainer}>
                {props.labels.map(label => <Chip key={label.text} style={{ ...styles.label, borderColor: label.color }} textStyle={{ color: label.color }} mode='outlined'>{label.text}</Chip>)}
            </Card.Content>
            }

            {/* Post title */}
            <Card.Title title={props.postTitle} titleNumberOfLines={2} />

            {/* Post Image */}
            {props.cardCover &&
                <Card.Content style={styles.cardCoverContainer}>
                    <Card.Cover style={styles.cardCover} blurRadius={isNSFW ? 20 : 0} source={{ uri: props.cardCover }} />
                    {isNSFW && <Button mode='contained' style={styles.nsfwButton} onPress={() => { setIsNSFW(false) }}>NSFW Content</Button>}
                </Card.Content>
            }

            {/* Post Description */}
            {props.cardContent &&
                <Card.Content>
                    <Text numberOfLines={2}>{props.cardContent}</Text>
                </Card.Content>
            }

            {/* Buttons */}
            <Card.Actions style={styles.cardFooter}>
                <View style={styles.voteContainer}>
                    <IconButton color={colors.primary} animated={true} icon={upVoted ? 'arrow-up-drop-circle' : 'arrow-up-drop-circle-outline'} onPress={handleUpvote} />
                    <Text>
                        {props.upvote - props.downvote + upVoted - downVoted}
                    </Text>
                    <IconButton color={colors.primary} animated={true} icon={downVoted ? 'arrow-down-drop-circle' : 'arrow-down-drop-circle-outline'} onPress={handleDownvote} />
                </View>
                <Button labelStyle={{ fontSize: 23 }} contentStyle={styles.comment} icon='comment-outline' onPress={() => console.log('Clicked comment')}><Text style={{ fontSize: 13 }}>{props.comment}</Text></Button>
            </Card.Actions>
        </Card>
    );
}

// Styles
const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        flexDirection: 'column'
    },
    cardCoverContainer: {
        justifyContent: 'center',
    },
    cardCover: {
        marginVertical: 5,
    },
    voteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '2.5%',
    },
    comment: {
        flexDirection: 'row-reverse',
    },
    labelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    label: {
        marginRight: 5,
        borderWidth: 0.75,
    },
    nsfwButton: {
        position: 'absolute',
        alignSelf: 'center',
    }
});

export default withTheme(PostPreview);