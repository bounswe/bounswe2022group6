import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import { RadioButton, Text, Divider, List, Switch, Paragraph, Title } from "react-native-paper";
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import ProfileScreenHeader from "./ProfileScreenHeader";

const EditProfileScreen = (props) => {
    const [info, setInfo] = useState({ ...props.route?.params?.user, birth_date: new Date(props.route?.params?.user.birth_date) }) // birth_date, diplomaID, email, first_name, gender, is_messaging_allowed, is_notifications_allowed, last_name, location, phone_number, profession, profile_picture, username, verified_as_doctor
    const [showDatePicker, setShowDatePicker] = useState(false)

    const [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    const GenderOption = (props) => {
        return (
            <View style={styles.genderOption}>
                <Text style={{ textAlign: 'center' }}>{props.label}</Text>
                <RadioButton value={props.value} />
            </View>
        );
    }

    useEffect(() => {
        props.navigation.setOptions({
            header: (props) => <ProfileScreenHeader {...props} info={info} />
        });
    }, [props.navigation, info]);

    return (
        <ScrollView>
            {/* Personal Information */}
            <List.Accordion id={1} left={(props) => <List.Icon {...props} icon="clipboard-account" />}
                title="Personal Information"
                description="Username, First/Last Name, Birthdate, Gender, Location"
            >
                <Divider />
                {/* Username */}
                <List.Item style={styles.listItem} onPress={() => { ref1.current.focus() }}
                    title="Username"
                    right={(props2) => <TextInput ref={ref1} style={styles.input} placeholder="Username" value={info.username} onChangeText={(newText) => setInfo((prevInfo) => ({ ...prevInfo, username: newText }))} />}
                />
                <Divider />
                {/* First Name */}
                <List.Item style={styles.listItem} onPress={() => { ref2.current.focus() }}
                    title="First Name"
                    right={props2 => <TextInput ref={ref2} style={styles.input} placeholder="First Name" value={info.first_name} onChangeText={(newText) => setInfo((prevInfo) => ({ ...prevInfo, first_name: newText }))} />}
                />
                <Divider />
                {/* Last Name */}
                <List.Item style={styles.listItem} onPress={() => { ref3.current.focus() }}
                    title="Last Name"
                    right={prop2 => <TextInput ref={ref3} style={styles.input} placeholder="Last Name" value={info.last_name} onChangeText={(newText) => setInfo((prevInfo) => ({ ...prevInfo, last_name: newText }))} />}
                />
                <Divider />
                {/* Birthdate */}
                <List.Item onPress={() => { setShowDatePicker(true) }}
                    title="Birthdate"
                    right={prop2 => <Text style={styles.input}>{info.birth_date.toLocaleDateString()}</Text>} />
                <DatePicker
                    modal
                    mode="date"
                    open={showDatePicker}
                    date={info.birth_date}
                    maximumDate={new Date()}
                    onConfirm={(date) => {
                        setShowDatePicker(false)
                        setInfo((prevInfo) => ({ ...prevInfo, birth_date: date }))
                    }}
                    onCancel={() => {
                        setShowDatePicker(false)
                    }}
                />
                <Divider />
                {/* Gender */}
                <List.Item
                    title="Gender"
                    right={props2 =>
                        <RadioButton.Group onValueChange={newGender => setInfo((prevInfo) => ({ ...prevInfo, gender: newGender }))} value={info.gender}>
                            <View style={{ flexDirection: 'row', }}>
                                <GenderOption label="Male" value="M" />
                                <GenderOption label="Female" value="F" />
                                <GenderOption label="Other" value="O" />
                            </View>
                        </RadioButton.Group>}
                />
                <Divider />
                {/* Location */}
                <List.Item onPress={() => { ref8.current.focus() }}
                    title="Location"
                    right={prop2 => <TextInput ref={ref8} style={styles.input} placeholder="Location" value={info.location} />}
                />
            </List.Accordion>
            <Divider />
            <List.Accordion title="Contact" id={2} left={(props) => <List.Icon {...props} icon="card-account-phone" />} description="Email Address, Phone Number">
                <Divider />
                {/* Email */}
                <List.Item style={styles.listItem} onPress={() => { ref4.current.focus() }}
                    title="Email Address"
                    right={(props2) => <TextInput ref={ref4} style={styles.textInput} keyboardType="email-address" placeholder="Email Address" value={info.email} onChangeText={(newText) => setInfo((prevInfo) => ({ ...prevInfo, email: newText }))} />}
                />
                <Divider />
                {/* Phone Number */}
                <List.Item style={styles.listItem} onPress={() => { ref5.current.focus() }}
                    title="Phone Number"
                    right={(props2) => <TextInput ref={ref5} style={styles.textInput} keyboardType="phone-pad" placeholder="Phone Number" value={info.phone_number} onChangeText={(newText) => setInfo((prevInfo) => ({ ...prevInfo, phone_number: newText }))} />}
                />
            </List.Accordion>
            <Divider />
            <List.Accordion title="Messaging & Notifications" id={3} left={(props) => <List.Icon {...props} icon="cellphone-message" />}>
                <Divider />
                {/* Messaging */}
                <List.Item style={styles.listItem}
                    title="Messaging"
                    right={(props2) => <Switch value={info.is_messaging_allowed} onValueChange={() => { setInfo((prevInfo) => ({ ...prevInfo, is_messaging_allowed: !prevInfo.is_messaging_allowed })) }} />}
                />
                {/* Notifications */}
                <Divider inset={true} />
                <List.Item style={styles.listItem}
                    title="Notifications"
                    right={(props2) => <Switch value={info.is_notifications_allowed} onValueChange={() => setInfo((prevInfo) => ({ ...prevInfo, is_notifications_allowed: !prevInfo.is_notifications_allowed }))} />}
                />
            </List.Accordion>
            <Divider />
            {/* Doctor Verification */}
            <List.Accordion title="Doctor Verification" id={4} left={(props) => <List.Icon {...props} icon="medical-bag" />}
                description={info.verified_as_doctor ? "You are a verified doctor!" : "If you are a doctor, you can submit your diploma ID and your profession to verify it!"}
            >
                {!info.verified_as_doctor && props.route.params.user.diplomaID != null && props.route.params.user.profession != null &&
                    <View>
                        <Paragraph>You have already submitted your diploma ID and your profession for doctor verification.</Paragraph>
                        <Paragraph>The admins will check your information and verify you as a doctor if the information provided is correct.</Paragraph>
                    </View>
                }
                <List.Item
                    title="Diploma ID"
                    right={(props2) => <TextInput ref={ref6} editable={props.route.params.user.diplomaID == null} style={{ color: 'black' }} value={info.diplomaID} onChangeText={newID => setInfo((prevInfo) => ({ ...prevInfo, diplomaID: newID }))} />}
                />
                <Divider />
                <List.Item
                    title="Profession"
                    right={(props2) => <TextInput ref={ref7} editable={props.route.params.user.profession == null} style={{ color: 'black' }} value={info.profession} onChangeText={newID => setInfo((prof) => ({ ...prevInfo, profession: prof }))} />}
                />
            </List.Accordion>
            <Divider />
            <List.Accordion title="Delete Account" description="Delete your account permanently." id={5} left={(props) => <List.Icon {...props} icon="close-octagon" />}>
                <Divider />
                {/* Delete Account */}
                <List.Item title="Delete Account"></List.Item>
            </List.Accordion>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listItem: {

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        textAlign: 'right',
        alignSelf: 'center',
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    genderOption: {
        alignItems: 'center',
        marginLeft: 20,
    },
})

export default EditProfileScreen;