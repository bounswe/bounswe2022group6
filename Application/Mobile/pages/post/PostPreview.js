import React, { useState } from "react";
import { Card, Button, IconButton, Text, withTheme, Chip } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { calculateDate, getFullDate } from "../components/DateFunctions";
import PostRightContent from "./PostRightContent";
import PostLeftContent from "./PostLeftContent";

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
    const [downVoted, setDownvoted] = useState(props.username !== null && props.post.downvoted_users.filter((item) => item.username === props.username).length > 0 ? true : false);
    const [upVoted, setUpvoted] = useState(props.username !== null && props.post.upvoted_users.filter((item) => item.username === props.username).length > 0 ? true : false);
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

    return (
        <Card
            style={styles.card} onPress={() => props.navigation.navigate('Post Details', { post: props.post, ...props.route.params })}>

            {/* Username, profile photo, post date etc. */}
            <Card.Title
                title={<Text onPress={() => console.log('clicked username')}>{props.post.owner.username}</Text>}
                titleStyle={{ fontSize: 14 }}
                subtitle={<Text onPress={() => setDateClicked((clicked) => !clicked)}>{dateClicked ? (getFullDate(props.post.created_at)) : calculateDate(props.post.created_at)}</Text>}
                subtitleStyle={{ fontSize: 12, color: 'red' }}
                left={(props2) => <PostLeftContent {...props2} {...props}/>}
                leftStyle={{ alignSelf: 'center' }}
                right={(props2) => <PostRightContent {...props2} {...props} openSnackBar={props.openSnackBar} />}
            />
            {/* Post Labels */}
            {props.post.labels && <Card.Content style={styles.labelContainer}>
                {props.post.labels.map(label => <Chip key={label.labelID} style={{ ...styles.label, borderColor: label.labelColor }} textStyle={{ color: label.labelColor }} mode='outlined'>{label.labelName}</Chip>)}
            </Card.Content>
            }

            {/* Post title */}
            <Card.Title title={props.post.title} titleNumberOfLines={2} />

            {/* Post Image */}
            {props.post.imageURL &&
                <Card.Content style={styles.cardCoverContainer}>
                    <Card.Cover style={styles.cardCover} blurRadius={isNSFW ? 20 : 0} source={{ uri: props.post.imageURL?.includes("https://") ? props.post.imageURL : "https://" + props.post.imageURL }} />
                    {isNSFW && <Button mode='contained' style={styles.nsfwButton} onPress={() => { setIsNSFW(false) }}>NSFW Content</Button>}
                </Card.Content>
            }

            {/* Post Description */}
            {props.post.description &&
                <Card.Content>
                    <Text numberOfLines={2}>{props.post.description}</Text>
                </Card.Content>
            }

            {/* Buttons */}
            <Card.Actions style={styles.cardFooter}>
                <View style={styles.voteContainer}>
                    <IconButton disabled={props.route.params?.username === undefined} color={colors.primary} animated={true} icon={upVoted ? 'arrow-up-drop-circle' : 'arrow-up-drop-circle-outline'} onPress={handleUpvote} />
                    <Text>
                        {props.post.result_vote}
                    </Text>
                    <IconButton disabled={props.route.params?.username === undefined} color={colors.primary} animated={true} icon={downVoted ? 'arrow-down-drop-circle' : 'arrow-down-drop-circle-outline'} onPress={handleDownvote} />
                </View>
                <Button labelStyle={{ fontSize: 23 }} contentStyle={styles.comment} icon='comment-outline' onPress={() => console.log('Clicked comment')}><Text style={{ fontSize: 13 }}>{props.post.comment_count}</Text></Button>
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