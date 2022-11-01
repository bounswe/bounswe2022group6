import React from "react";
import { View, Text, Button, ScrollView, SafeAreaVie, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

const Section = (props) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}> {props.title} </Text>
            <View style={styles.sectionItemContainer}>
                {props.children}
            </View>
        </View>
    )
}

const Label = (props) => {
    return (
        <View style={styles.sectionItem}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.textInput} placeholder={props.placeholder} value={props.value} />
        </View>
    )
}
const Buttons = ({ navigation }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>
                    Save Changes!
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>
                    Discard Changes
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const EditProfileScreen = (props) => {
    const user = props.route?.params?.user

    return (
        <SafeAreaView>
            <ScrollView style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Section title='Personal Information'>
                        <Label label='Username:' placeholder='smithjohnxx' value={user?.username}></Label>
                        <Label label='Gender:' placeholder='Male' value={user?.gender == "M" ? "Male" : "Female"} ></Label>
                        <Label label='Birthdate:' placeholder='XX.XX.XXXX' value={user?.birth_date}></Label>
                    </Section>
                    <Section title='Contact'>
                        <Label label='Email Address:' placeholder='smithjohn@email.com' value={user?.email} ></Label>
                        <Label label='Phone Number:' placeholder='+90 (5xx) xxx xx xx'></Label>
                    </Section>
                    <Section title='Other'>
                        <Label label='Location:' placeholder='Istanbul, Turkey'></Label>
                    </Section>
                </View>
                <Buttons navigation={props.navigation} />
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    body: {

    },
    backgroundColor:{
    },
    section: {

    },
    sectionContainer: {

    },
    sectionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
    },
    sectionTitle: {
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#DCDCDC',
        paddingVertical: 10,
        paddingLeft: '3%',
    },
    sectionItemContainer: {
        paddingVertical: 7
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        padding: 10,
        borderRadius: 50,
        margin: 10
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    label: {
        paddingLeft: '5%',
    },
    textInput: {
        width: '50%',
        textAlign: 'right',
        paddingRight: '5%',
    },
})

export default EditProfileScreen;