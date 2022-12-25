import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { handleGetUserData } from '../userAPI';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';
import LoadingDisplay from "../components/LoadingDisplay";
import ProfileScreenHeader from "./ProfileScreenHeader";
import { ActivityIndicator, Avatar, List, Paragraph, Subheading, Title } from 'react-native-paper';

const genders = { M: 'Male', F: 'Female', O: 'Other' }

const ProfileScreen = (props) => {
    const [user, setUser] = useState(null)
    const [fetching, setFetching] = useState(true)
    const { colors } = useTheme();

    useFocusEffect(
        useCallback(() => {
            let isActive = true;
            setFetching(true)
            const fetchUserData = async () => {
                try {
                    userData = await handleGetUserData()
                    if (isActive) {
                        setUser(userData);
                        setFetching(false)
                    }
                } catch (e) {
                    console.log("Error: ", e)
                }
            };
            fetchUserData();
            return () => { isActive = false }
        }, [])
    );

    useEffect(() => {
        props.navigation.setOptions({
            header: (props) => <ProfileScreenHeader {...props} user={user} />
        });
    }, [props.navigation, user]);

    return (
        !fetching ?
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primary }}>
                    <Avatar.Image size={130} style={{marginHorizontal: 30, marginBottom: -30}} source={props2 => <Image {...props2} style={styles.avatar} source={{ uri: user.profile_picture ?? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} />} />
                    <View>
                        {(user.first_name || user.last_name) &&
                        <Title style={{ color: 'white' }}>{user.first_name && user.last_name ? (user.first_name + " " + user.last_name) : (user.first_name ? user.first_name : user.last_name)}</Title>}
                        <Subheading style={{ color: 'white' }}>{user.username}</Subheading>
                        <Paragraph style={{ color: 'white' }}>rep score</Paragraph>
                    </View>
                </View>
                <View style={{ marginTop: 40 }}>
                    {user.verified_as_doctor &&
                        <List.Item
                            title={user.profession}
                            left={props2 => <List.Icon {...props2} icon="doctor" />}
                        />
                    }
                    {user.location &&
                        <List.Item
                            title={user.location.split("/").join(', ')}
                            left={props2 => <List.Icon {...props2} icon="map-marker" />}
                        />
                    }
                    {user.phone_number &&
                        <List.Item
                            title={user.phone_number}
                            left={props2 => <List.Icon {...props2} icon="phone" />}
                        />
                    }
                    {user.birth_date &&
                        <List.Item
                            title={new Date(user.birth_date).toLocaleDateString()}
                            left={props2 => <List.Icon {...props2} icon="cake-variant" />}
                        />
                    }
                    {user.gender &&
                        <List.Item
                            title={genders[user.gender]}
                            left={props2 => <List.Icon {...props2} icon="gender-transgender" />}
                        />
                    }
                </View>
            </ScrollView>
            :
            <ActivityIndicator />
    );
}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        backgroundColor: "#00BFFF",
    },
    avatar: {
        aspectRatio: 1 / 1,
        height: 130,
        borderRadius: 65,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'flex-start',
        marginRight: 20,

    },
    name: {
        fontSize: 22,
        color: "white",
        fontWeight: '600',
    },
    body: {
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        paddingTop: 10,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});



export default ProfileScreen;