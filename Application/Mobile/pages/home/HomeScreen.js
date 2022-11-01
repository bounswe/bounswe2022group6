/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, List, Headline } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <ScrollView >


                <Headline style={{ marginLeft: 23 }}>Lastest Post</Headline>
                <Card
                    style={{
                        shadowOffset: { width: 5, height: 5 },
                        width: '90%',
                        borderRadius: 12,
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}>
                    <Card.Content>
                        <Title>Face swells after walking in cold/rain
                        </Title>
                        <Card.Cover
                            style={{
                                width: '100%',
                                height: 190,
                                alignSelf: 'center',
                            }}
                            source={{
                                uri:
                                    'https://preview.redd.it/ede9kduxerb61.jpg?width=640&crop=smart&auto=webp&s=e57caf96f893e23d64e5468b029cea5945428705',
                            }}
                        />
                        <Paragraph>Whenever I come inside after walking in the cold, especially when it’s wet outside...</Paragraph>
                    </Card.Content>
                </Card>
                <Card
                    style={{
                        shadowOffset: { width: 5, height: 5 },
                        width: '90%',
                        borderRadius: 12,
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}>
                    <Card.Content>
                        <Title>I pulled shoulder. This is a day after bowling</Title>
                        <Card.Cover
                            style={{
                                width: '100%',
                                height: 190,
                                alignSelf: 'center',
                            }}
                            source={{
                                uri:
                                    'https://i.redd.it/qenk7995rwn41.jpg',
                            }}
                        />
                        <Paragraph>There isn't much pain surprisingly. Any advice would be nice!</Paragraph>
                    </Card.Content>
                </Card>
                <Card
                    style={{
                        shadowOffset: { width: 5, height: 5 },
                        width: '90%',
                        borderRadius: 12,
                        alignSelf: 'center',
                        marginBottom: 10,
                    }}>
                    <Card.Content>
                        <Title>Had traumatic brain injury/coma 14 years ago, what does this mean.</Title>
                        <Card.Cover
                            style={{
                                width: '100%',
                                height: 190,
                                alignSelf: 'center',
                            }}
                            source={{
                                uri:
                                    'https://preview.redd.it/jvn39w17smr41.jpg?width=960&crop=smart&auto=webp&s=2752cdab7fc98c8769073ae6090a8f5c145beaa2',
                            }}
                        />
                        <Paragraph>Only used this as a party trick up until now, should I be worried?</Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View >
    )
}

export default HomeScreen;