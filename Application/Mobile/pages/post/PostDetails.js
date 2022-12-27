import React, { useEffect, useState } from "react";
import { Card, Avatar, Button, IconButton, Text, withTheme, Menu, Chip, Paragraph } from 'react-native-paper';
import { View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { BACKEND_URL } from "@env"
import Tooltip from 'react-native-walkthrough-tooltip';
import { set } from "react-native-reanimated";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog from "react-native-dialog";


// The details screen of a post
const PostDetails = ({ route, navigation, ...props }) => {
    console.log(route.params)
    const { owner, title, description, createdAt, createdAtTime, imageURL, labels, colors, postId, annotations } = route.params
    const upVoted = false
    const downVoted = false

    const handleUpvote = () => { }
    const handleDownvote = () => { }

    const [comments, setComments] = useState([]);
    const [showAnnotate, setShowAnnotate] = useState(false);
    const [annotation, setAnnotation] = useState();
    const [showAnnotations, setShowAnnotatations] = useState(false);
    const [annotationValue, setAnnotationValue] = useState("");
    const [annotationInputShow, setAnnotationInputShow] = useState(false);


    const getComments = async () => {
        try {
            console.log(postId)
            const response = await fetch(BACKEND_URL + '/contmgr/post?id=' + postId);
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
    console.log("dsds", annotations[0])

    const onSelectionChange = ({ nativeEvent: { selection, text } }) => {
        setTimeout(function () { setShowAnnotate(true) }, 3000)
        setAnnotation(selection)
        console.log(
            "change selection to",
            selection,
            "for value"
        );

        // alert("Wanna annotate ?")
    };


    const randomIntFromInterval = () => {  
        return Math.floor(Math.random() * (99 - 10 + 1) + 10)
    }

    const handleAnnotateText = async () => {
        console.log(annotation)
        console.log(description.substring(annotation?.start, annotation?.end))
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token " + await AsyncStorage.getItem("token"));

        var formdata = new FormData();
        formdata.append("annotation_type", "text");
        formdata.append("content_type", "post");
        formdata.append("content_id", postId);
        formdata.append("jsonld", "{\"@context\":\"http://www.w3.org/ns/anno.jsonld\",\"type\":\"Annotation\",\"body\":[{\"type\":\"TextualBody\",\"value\":\"" + annotationValue + "\",\"purpose\":\"commenting\",\"creator\":{\"id\":\"1\",\"name\":\"" + owner.username + "\"},\"created\":\"" + new Date().toISOString() + "\",\"modified\":\"" + new Date().toISOString() + "\"}],\"target\":{\"selector\":[{\"type\":\"TextQuoteSelector\",\"exact\":\"Annotations\"},{\"type\":\"TextPositionSelector\",\"start\":" + annotation.start + ",\"end\":" + annotation.end + "}]},\"id\":\"#5519fef0-7376-4630-96f8-4b6407419c" + randomIntFromInterval() + "\"}");
        console.log(formdata)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(BACKEND_URL + "contmgr/annotations/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert("Annotation created!")
    }

    console.log(annotations[0][0].body[0].value)

    return (
        <>
            <View>
                <Dialog.Container visible={showAnnotations} >
                    <Dialog.Title>Annotations</Dialog.Title>
                    {annotations[0].map(annotation => (
                        <Dialog.Description>
                            {description.substring(annotation.target.selector[1].start, annotation.target.selector[1].end)}, {annotation.body[0].value}
                        </Dialog.Description>
                    ))}
                    <Dialog.Button label="Close" onPress={() => { setShowAnnotatations(false) }} />
                </Dialog.Container>
            </View>
            <View>
                <Dialog.Container visible={annotationInputShow} >
                    <Dialog.Title>Annotate</Dialog.Title>
                    <Dialog.Description>{description.substring(annotation?.start, annotation?.end)}</Dialog.Description>
                    <Dialog.Input onChangeText={(e) => { setAnnotationValue(e) }} ></Dialog.Input>
                    <Dialog.Button label="Annotate" onPress={() => { setAnnotationInputShow(false); handleAnnotateText() }} />
                    <Dialog.Button label="Close" onPress={() => { setAnnotationInputShow(false) }} />
                </Dialog.Container>
            </View>
            <Card
                style={styles.card}>
                <Card.Title
                    title={<Text>{owner.username}</Text>}
                    titleStyle={{ fontSize: 14 }}
                    subtitle={<Text onPress={() => console.log('clicked date')}>{createdAt}, {createdAtTime}</Text>} //TODO: take date data from props
                    subtitleStyle={{ fontSize: 12, color: 'red' }}
                />
                {labels && <Card.Content style={styles.labelContainer}>
                    {labels.map(label => <Chip key={label.labelID} style={{ ...styles.label, borderColor: label.labelColor }} textStyle={{ color: label.labelColor }} mode='outlined'>{label.labelName}</Chip>)}
                </Card.Content>
                }

                {/* Post title */}
                <Card.Title title={title} titleNumberOfLines={2} />

                {/* Post Image */}
                {imageURL &&
                    <Card.Content style={styles.cardCoverContainer}>
                        <Card.Cover style={styles.cardCover} blurRadius={false ? 20 : 0} source={{ uri: imageURL?.includes("https://") ? imageURL : "https://" + imageURL }} />
                        {false && <Button mode='contained' style={styles.nsfwButton}>NSFW Content</Button>}
                    </Card.Content>
                }

                {/* Post Description */}
                {description &&
                    <Card.Content>
                        <Tooltip
                            isVisible={showAnnotate}
                            content={<Text onPress={() => { setAnnotationInputShow(true) }} >Annotate</Text>}
                            placement="bottom"
                            onClose={() => { setShowAnnotate(false) }}
                        >
                            <TextInput caretHidden={true} showSoftInputOnFocus={false} multiline value={description} onSelectionChange={onSelectionChange} numberOfLines={2}></TextInput>
                        </Tooltip>
                    </Card.Content>
                }


                {/* Buttons */}
                <Card.Actions style={styles.cardFooter}>
                    <View style={styles.voteContainer}>
                        <IconButton color={colors.primary} animated={true} icon={upVoted ? 'arrow-up-drop-circle' : 'arrow-up-drop-circle-outline'} onPress={handleUpvote} />
                        <Text>
                            0{/*props.upvote - props.downvote + upVoted - downVoted*/}
                        </Text>
                        <IconButton color={colors.primary} animated={true} icon={downVoted ? 'arrow-down-drop-circle' : 'arrow-down-drop-circle-outline'} onPress={handleDownvote} />
                        <IconButton color={colors.primary} animated={true} icon={'clipboard-outline'} onPress={() => { setShowAnnotatations(true) }} ></IconButton>
                        <Text>
                            {annotations[0]?.length ? annotations[0]?.length : 0}
                        </Text>
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
                : <></>}

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
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
    }
});


export default PostDetails;