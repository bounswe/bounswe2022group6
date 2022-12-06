import React, { useState } from "react";
import { Card, Avatar, Button, IconButton, Text, withTheme, Menu, Divider, Chip } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

// The details screen of a post
const PostDetails = ({ route, navigation }) => {
    const { owner, title, description, createdAt, createdAtTime, imageURL, labels, colors } = route.params
    const upVoted = false
    const downVoted = false

    const handleUpvote = () => {}
    const handleDownvote = () => {}

    return (
        <Card
        style={styles.card}>
            <Card.Title
                title={<Text>{owner.username}</Text>}
                titleStyle={{fontSize: 14}}
                subtitle={<Text onPress={() => console.log('clicked date')}>{createdAt}, {createdAtTime}</Text>} //TODO: take date data from props
                subtitleStyle={{fontSize: 12, color: 'red'}}
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
                    <Card.Cover style={styles.cardCover} blurRadius={false ? 20 : 0} source={{ uri: imageURL }} />
                    {false && <Button mode='contained' style={styles.nsfwButton}>NSFW Content</Button>}
                </Card.Content>
            }

            {/* Post Description */}
            {description &&
                <Card.Content>
                    <Text numberOfLines={2}>{description}</Text>
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
                </View>
                <Button labelStyle={{ fontSize: 23 }} contentStyle={styles.comment} icon='comment-outline' onPress={() => console.log('Clicked comment')}><Text style={{ fontSize: 13 }}>0</Text></Button>
            </Card.Actions>
        </Card>
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