import React, { useEffect, useState } from "react";
import { Card, Button, IconButton, Text, Chip, Paragraph, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { BACKEND_URL } from "@env"
import { calculateDate, getFullDate } from "../components/DateFunctions";
import PostLeftContent from "./PostLeftContent";
import PostRightContent from "./PostRightContent";

// The details screen of a post
const PostDetails = (props) => {
    const upVoted = false
    const downVoted = false
    const [dateClicked, setDateClicked] = useState(false)

    const handleUpvote = () => { }
    const handleDownvote = () => { }

    const [comments, setComments] = useState([]);
    const {colors} = useTheme()


    const getComments = async () => {
        try {
            console.log(props.route.params.postID)
            const response = await fetch(BACKEND_URL + '/contmgr/post?id=' + props.route.params.postID);
            const json = await response.json();
            console.log("--", json.comments)
            return json.comments
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(async () => {
        let resp = await getComments()
        console.log("****", resp)
        setComments(resp)
    }, [])

    return (
        <>
            <Card
                style={styles.card}>
                <Card.Title
                    title={<Text>{props.route.params.post.owner.username}</Text>}
                    titleStyle={{ fontSize: 14 }}
                    subtitle={<Text onPress={() => setDateClicked((clicked) => !clicked)}>{dateClicked ? (getFullDate(props.route.params.post.created_at)) : calculateDate(props.route.params.post.created_at)}</Text>}
                    subtitleStyle={{ fontSize: 12, color: 'red' }}
                    left={(props2) => <PostLeftContent /* profile={props.authorProfilePhoto */ {...props2} {...props}/>}
                    leftStyle={{ alignSelf: 'center' }}
                    right={(props2) => <PostRightContent {...props2} {...props} openSnackBar={props.openSnackBar} />}
                />
                {props.route.params.post.labels && <Card.Content style={styles.labelContainer}>
                    {props.route.params.post.labels.map(label => <Chip key={label.labelID} style={{ ...styles.label, borderColor: label.labelColor }} textStyle={{ color: label.labelColor }} mode='outlined'>{label.labelName}</Chip>)}
                </Card.Content>
                }

                {/* Post title */}
                <Card.Title title={props.route.params.post.title} titleNumberOfLines={2} />

                {/* Post Image */}
                {props.route.params.post.imageURL &&
                    <Card.Content style={styles.cardCoverContainer}>
                        <Card.Cover style={styles.cardCover} blurRadius={false ? 20 : 0} source={{ uri: props.route.params.post.imageURL?.includes("https://") ? props.route.params.post.imageURL : "https://" + props.route.params.post.imageURL }} />
                        {isNSFW && <Button mode='contained' style={styles.nsfwButton}>NSFW Content</Button>}
                    </Card.Content>
                }

                {/* Post Description */}
                {props.route.params.post.description &&
                    <Card.Content>
                        <Text numberOfLines={2}>{props.route.params.post.description}</Text>
                    </Card.Content>
                }


                {/* Buttons */}
                <Card.Actions style={styles.cardFooter}>
                    <View style={styles.voteContainer}>
                        <IconButton disabled={props.route.params.username === null} color={colors.primary} animated={true} icon={upVoted ? 'arrow-up-drop-circle' : 'arrow-up-drop-circle-outline'} onPress={handleUpvote} />
                        <Text>
                            {props.route.params.post.result_vote}
                        </Text>
                        <IconButton disabled={props.route.params.username === null} color={colors.primary} animated={true} icon={downVoted ? 'arrow-down-drop-circle' : 'arrow-down-drop-circle-outline'} onPress={handleDownvote} />
                    </View>
                    {/* <Button labelStyle={{ fontSize: 23 }} contentStyle={styles.comment} icon='comment-outline' onPress={() => console.log('Clicked comment')}><Text style={{ fontSize: 13 }}>3</Text></Button> */}
                </Card.Actions>
            </Card>
            {comments?.length ?
                <ScrollView>
                    {comments.map(comment => (
                        <Card>
                            <Card.Title title={comment.owner} />
                            <Card.Content>
                                {/* <Title>Card title</Title> */}
                                <Paragraph>{comment.description}</Paragraph>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
            : <></> }
        </>
    );
}

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


export default PostDetails;