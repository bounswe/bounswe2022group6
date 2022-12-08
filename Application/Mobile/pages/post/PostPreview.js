import React, { useState } from "react";
import { Card, Avatar, Button, IconButton, Text, withTheme, Menu, Divider, Chip } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { BACKEND_URL } from '@env'

// The content on the left of username
const LeftContent = (props) => {
    return (
        <TouchableOpacity onPress={() => console.log('Clicked profile photo')}>
            <Avatar.Icon {...props} icon='account' /* source={{ uri: props.profile }} */ />
            {/* <Avatar.Image {...props} source={{ uri: props.profile }} /> */}
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

/*
postID: number
owner: {userID: ..., username: }
description: 
vote_count?
voted_users:
created_at_date: "xx.xx.xxxx"
created_at_time: "xx.xx.xx"
title: string
type: string
location: string
imageurl: null/string
is_marked_nsfw: boolean
labels: [{labelID, labelName, }]
mentioned_users
*/
const PostPreview = (props) => {
    const { colors } = props.theme; // colors of the theme
    const [isNSFW, setIsNSFW] = useState(props.is_marked_nsfw); // NSFW
    // Upvote & Downvote
    //TODO: the initial states should be taken from backend
    const [downVoted, setDownvoted] = useState(props.downvoted_users.filter((item) => item.username === props.userName).length > 0 ? true : false);
    const [upVoted, setUpvoted] = useState(props.upvoted_users.filter((item) => item.username === props.userName).length > 0 ? true : false);
    const [dateClicked, setDateClicked] = useState(false); 

    /*     const handleVoteRequest = async () => {
            try {
                const response = await fetch(BACKEND_URL + '/contmgr/postvote/', {method: 'POST'});
                const json = await response.json();
                return json.posts
            } catch (error) {
                console.error(error);
            }
        }
     */
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

    const calculateDate = (date, time) => {
        const dateString = date.split('.').reverse().join('-') + 'T' + time.split('.').join(':')
        const _date = new Date(dateString)
        const differenceMS = new Date() - _date;

        if (differenceMS < 0) {
            return 'Not published yet!'
        }

        const diffDays = Math.floor(differenceMS / 86400000); // days
        const diffHrs = Math.floor((differenceMS % 86400000) / 3600000); // hours
        const diffMins = Math.floor(((differenceMS % 86400000) % 3600000) / 60000); // minutes


        if (diffDays > 2) {
            return date
        } else if (diffDays == 2) {
            return '2 days ago'
        } else if (diffDays == 1) {
            return '1 day ago'
        } else if (diffHrs > 0) {
            return (diffHrs == 1 ? 'an hour ago' : diffHrs + ' hours ago')
        } else if (diffMins > 1) {
            return diffMins + ' minutes ago'
        } else {
            return 'just now'
        }
    }

    return (
        <Card
            style={styles.card} onPress={() => props.navigation.navigate('Post Details', { owner: props.owner, title: props.title, description: props.description, imageURL: props.imageURL, createdAt: props.created_at_date, createdAtTime: props.created_at_time, labels: props.labels, colors: props.theme, postId: props.postID })}>
            {/* Username, profile photo, post date etc. */}
            <Card.Title
                title={<Text onPress={() => console.log('clicked username')}>{props.owner.username}</Text>}
                titleStyle={{ fontSize: 14 }}
                subtitle={<Text onPress={() => setDateClicked((clicked) => !clicked)}>{dateClicked ? (props.created_at_date + ', ' + props.created_at_time) : calculateDate(props.created_at_date, props.created_at_time)}</Text>} //TODO: take date data from props
                subtitleStyle={{ fontSize: 12, color: 'red' }}
                left={(props2) => <LeftContent /* profile={props.authorProfilePhoto */ {...props2} />}
                leftStyle={{ alignSelf: 'center' }}
                right={(props2) => <RightContent {...props2} openSnackBar={props.openSnackBar} author={props.owner.username} />}
            />
            {/* Post Labels */}
            {props.labels && <Card.Content style={styles.labelContainer}>
                {props.labels.map(label => <Chip key={label.labelID} style={{ ...styles.label, borderColor: label.labelColor }} textStyle={{ color: label.labelColor }} mode='outlined'>{label.labelName}</Chip>)}
            </Card.Content>
            }

            {/* Post title */}
            <Card.Title title={props.title} titleNumberOfLines={2} />

            {/* Post Image */}
            {props.imageURL &&
                <Card.Content style={styles.cardCoverContainer}>
                    <Card.Cover style={styles.cardCover} blurRadius={isNSFW ? 20 : 0} source={{ uri: props.imageURL?.includes("https://") ? props.imageURL : "https://" + props.imageURL }} />
                    {isNSFW && <Button mode='contained' style={styles.nsfwButton} onPress={() => { setIsNSFW(false) }}>NSFW Content</Button>}
                </Card.Content>
            }

            {/* Post Description */}
            {props.description &&
                <Card.Content>
                    <Text numberOfLines={2}>{props.description}</Text>
                </Card.Content>
            }


            {/* Buttons */}
            <Card.Actions style={styles.cardFooter}>
                <View style={styles.voteContainer}>
                    <IconButton color={colors.primary} animated={true} icon={upVoted ? 'arrow-up-drop-circle' : 'arrow-up-drop-circle-outline'} onPress={handleUpvote} />
                    <Text>
                        {props.vote_count}
                    </Text>
                    <IconButton color={colors.primary} animated={true} icon={downVoted ? 'arrow-down-drop-circle' : 'arrow-down-drop-circle-outline'} onPress={handleDownvote} />
                </View>
                <Button labelStyle={{ fontSize: 23 }} contentStyle={styles.comment} icon='comment-outline' onPress={() => console.log('Clicked comment')}><Text style={{ fontSize: 13 }}>{props.comment_count}</Text></Button>
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