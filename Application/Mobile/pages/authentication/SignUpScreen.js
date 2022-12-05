// AUTHOR: BEDIRHAN PAMUKCUOGLU

import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { ScrollView, View, StyleSheet } from 'react-native';
import { RadioButton, Title, Button, TextInput, HelperText, Text } from 'react-native-paper';
import { handleSignUpRequest } from '../authAPI';

export const Dropdown = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' }
            ]}
        />
    );
};

const GenderOption = (props) => {
    return (
        <View style={styles.genderOption}>
            <Text style={{ textAlign: 'center' }}>{props.label}</Text>
            <RadioButton value={props.value} />
        </View>
    );
}

// The sign up screen
export const SignUpScreen = (props) => {

    const [loading, setLoading] = useState(false)
    const [mail, setMail] = useState(props.route.params.mail || "")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [userName, setUserName] = useState("")
    const [birthDate, setBirthDate] = useState(new Date())
    const [gender, setGender] = useState("")

    const [showPass, setShowPass] = useState(false)
    const [showPassAgain, setShowPassAgain] = useState(false)
    const [showHelper, setShowHelper] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [errors, setErrors] = useState({ mail: "", password: "", userName: "", birthDate: "", gender: "" })
    const [refresh, setRefresh] = useState(false)
 
    const handleClick = () => {
        try {
            let error = false
            let copyErrors = errors
            if (mail == "" || !mail.includes('@') || !mail.includes('.')) { error = true; copyErrors.mail = "Please write a valid mail address!" }
            else { copyErrors.mail = "" }
            if (userName == "") { error = true; copyErrors.userName = "Please write a username!" }
            else { copyErrors.userName = "" }
            if (password == "") { error = true; copyErrors.password = "Please write a password!" }
            else { copyErrors.password = "" }
            if (password !== passwordAgain ) { error = true; copyErrors.password = "Passwords do not match!" }
            else { copyErrors.password = "" }
            if (birthDate == "" || birthDate.toDateString() == new Date().toDateString()) { error = true; copyErrors.birthDate = "Please choose your birthdate!" }
            else { copyErrors.birthDate = "" }
            if (gender == "") { error = true; copyErrors.gender = "Please choose a gender!" }
            else { copyErrors.gender = "" }

            setErrors(copyErrors)
            setRefresh(!refresh)

            if (!error) {
                setLoading(true)

                handleSignUpRequest(mail, password, userName, gender, birthDate.getDate(), birthDate.getMonth() + 1, birthDate.getFullYear())
                    .then(() => { alert("Success!"); props.navigation.navigate("Login") })
                    .catch(err => { setLoading(false); alert(err) })
            }

        } catch (error) {
            setLoading(false)
            alert(error)
        }
    }

    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Title >Sign Up to Medishare!</Title>
                </View>
                <View style={styles.main}>
                    <TextInput
                        label="Username"
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                        left={<TextInput.Icon name="account" color='gray' />}
                    />
                    <HelperText type="error" visible={errors.userName != ""} >{errors.userName}</HelperText>
                    <TextInput
                        label="Mail"
                        value={mail}
                        onChangeText={(text) => setMail(text)}
                        left={<TextInput.Icon name="email" color='gray' />}
                        keyboardType="email-address"
                    />
                    <HelperText type="error" visible={errors.mail != ""} >{errors.mail}</HelperText>
                    <TextInput
                        label="Password"
                        value={password}
                        onFocus={() => { setShowHelper(true) }}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={!showPass}
                        left={<TextInput.Icon name="lock" color='gray' />}
                        right={<TextInput.Icon name={showPass ? 'eye' : 'eye-off'} color='gray' forceTextInputFocus={false} onPress={() => { setShowPass(!showPass) }} />}
                        keyboardType={showPass ? 'visible-password' : 'default'}
                    />
                    <HelperText type="error" visible={errors.password != ""} >{errors.password}</HelperText>
                    <TextInput
                        label="Password (Again)"
                        value={passwordAgain}
                        onChangeText={(text) => setPasswordAgain(text)}
                        secureTextEntry={!showPassAgain}
                        left={<TextInput.Icon name="lock" color='gray' />}
                        right={<TextInput.Icon name={showPassAgain ? 'eye' : 'eye-off'} color='gray' forceTextInputFocus={false} onPress={() => { setShowPassAgain(!showPassAgain) }} />}
                        keyboardType={showPass ? 'visible-password' : 'default'}
                    />
                    <HelperText type="error" visible={errors.password != ""} >{errors.password}</HelperText>
                    <TextInput
                        label="Birthdate"
                        value={birthDate.toDateString()}
                        onPressIn={() => { setShowDatePicker(true) }}
                        left={<TextInput.Icon name="cake-variant" forceTextInputFocus={false} color='gray' />}
                        showSoftInputOnFocus={false}
                        caretHidden={true}
                    />
                    <HelperText type="error" visible={errors.birthDate != ""} >{errors.birthDate}</HelperText>
                    <DatePicker
                        modal
                        mode="date"
                        open={showDatePicker}
                        date={birthDate}
                        maximumDate={new Date()}
                        onConfirm={(date) => {
                            setShowDatePicker(false)
                            setBirthDate(date)
                        }}
                        onCancel={() => {
                            setShowDatePicker(false)
                        }}
                    /> 

                    <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                        <Text >Gender</Text>
                        <View style={styles.genderContainer}>
                            <GenderOption label='Male' value='m' />
                            <GenderOption label='Female' value='f' />
                            <GenderOption label='Other' value='o' />
                            <GenderOption label='None' value='' />
                        </View>
                    </RadioButton.Group>

                    <HelperText type="error" visible={errors.gender != ""} >{errors.gender}</HelperText>
                </View>
                <View style={styles.footer}>
                    <Button style={styles.signUpButton} mode='contained' onPress={handleClick}>
                        Sign Up
                    </Button>
                </View>
            </View>
        </ScrollView>
        // {loading && <LoadingDisplay />}
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    body: {
        flexGrow: 1,
        margin: '5%',
    },
    header: {
        alignSelf: 'center',
    },
    main: {
        marginVertical: '5%',
    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    genderOption: {
        flex: 1,
        alignItems: 'center',
    },
    footer: {
    },
    signUpButton: {
        width: '80%',
        alignSelf: 'center',
    },
});