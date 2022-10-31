import React from "react";
import { useNavigation } from '@react-navigation/native';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

const ProfileScreen = () => {
    const navigator = useNavigation();
    return (
        <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header} />
            
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>John Smith</Text>
                    <Text style={styles.info}>Dermatologist</Text>
                    <Text style={styles.description}> Biography text here. Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis.</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigator.navigate('EditProfile')}>
                        <Text>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 125,
    },
    avatar: {
        aspectRatio: 1/1,
        marginTop: -65,
        height: 130,
        borderRadius: 65,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'center',

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