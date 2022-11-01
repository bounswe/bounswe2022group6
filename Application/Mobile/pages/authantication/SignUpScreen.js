// AUTHOR: BEDIRHAN PAMUKCUOGLU

import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Stack, Button, TextInput, Text, Box, ActivityIndicator } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import LoadingDisplay from '../components/LoadingDisplay';
import { HelperText } from 'react-native-paper';
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

export const SignUpScreen = (props) => {

    const [loading, setLoading] = useState(false)
    const [mail, setMail] = useState(props.route.params.mail || "")
    const [password, setPassword] = useState(props.route.params.password || "")
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
            if (mail == "" || !mail.includes('@') || !mail.includes('.')) { error = true; copyErrors.mail = "Please write valid mail address!" }
            else { copyErrors.mail = "" }
            if (userName == "") { error = true; copyErrors.userName = "Please write username!" }
            else { copyErrors.userName = "" }
            if (password == "") { error = true; copyErrors.password = "Please write password!" }
            else { copyErrors.password = "" }
            if (birthDate == "" || birthDate.toDateString() == new Date().toDateString()) { error = true; copyErrors.birthDate = "Please write birthdate!" }
            else { copyErrors.birthDate = "" }
            if (gender == "") { error = true; copyErrors.gender = "Please write gender!" }
            else { copyErrors.gender = "" }

            setErrors(copyErrors)
            setRefresh(!refresh)

            if (!error) {
                setLoading(true)
                console.log(mail, password, userName, gender, birthDate.getDate(), birthDate.getMonth(), birthDate.getFullYear())

                handleSignUpRequest(mail, password, userName, gender, birthDate.getDate(), birthDate.getMonth()+1, birthDate.getFullYear())
                .then(() => { alert("Success!"); props.navigation.navigate("Login") })
                .catch(err => { setLoading(false); alert(err)})
            }

        } catch (error) {
            setLoading(false)
            alert(error)
        }
    }

    return (
        <>
            <ScrollView>
                <Stack spacing={2} style={{ paddingTop: '6%', marginBottom: '30%', margin: 16, paddingBottom: 30, elevation: 20 }}>
                    <Text variant="subtitle1" style={{ paddingBottom: "4%" }} >We are glad to see that you are joining to worlds #1 Medical Experience Sharing Platform!</Text>
                    <Text variant="subtitle2" style={{ paddingBottom: "6%" }} >Please fill the boxes below to share your experiences and problems</Text>
                    <TextInput
                        label="Username"
                        value={userName}
                        variant='filled'
                        onChangeText={(text) => setUserName(text)}
                        leading={() => (<Icon name="person" size={20} />)}
                    />
                    <HelperText type="error" visible={errors.userName != ""} >{errors.userName}</HelperText>
                    <TextInput
                        label="Mail"
                        value={mail}
                        variant='filled'
                        onChangeText={(text) => setMail(text)}
                        leading={() => (<Icon name="mail" size={20} />)}
                    />
                    <HelperText type="error" visible={errors.mail != ""} >{errors.mail}</HelperText>
                    <TextInput
                        label="Password"
                        value={password}
                        onFocus={() => { setShowHelper(true) }}
                        variant="filled"
                        onChangeText={(text) => setPassword(text)}
                        helperText={showHelper ? 'I know you will just copy paste this to below' : ""}
                        secureTextEntry={!showPass}
                        leading={() => (<Icon name="lock" size={20} />)}
                        trailing={() =>
                            showPass ? <Icon onPress={() => { setShowPass(!showPass) }} name="visibility" size={20} /> : <Icon onPress={() => { setShowPass(!showPass) }} name="visibility-off" size={20} />
                        }
                    />
                    <HelperText type="error" visible={errors.password != ""} >{errors.password}</HelperText>
                    <TextInput
                        label="Password Again"
                        value={password}
                        variant="filled"
                        onChangeText={(text) => setPassword(text)}
                        helperText={showHelper ? 'No worries, I did already!' : ""}
                        secureTextEntry={!showPassAgain}
                        leading={() => (<Icon name="lock" size={20} />)}
                        trailing={() =>
                            showPassAgain ? <Icon onPress={() => { setShowPassAgain(!showPassAgain) }} name="visibility" size={20} /> : <Icon onPress={() => { setShowPassAgain(!showPassAgain) }} name="visibility-off" size={20} />
                        }
                    />
                    <HelperText type="error" visible={errors.password != ""} >{errors.password}</HelperText>
                    <TextInput
                        label="Birth Date"
                        variant="filled"
                        value={birthDate.toDateString()}
                        onPressIn={() => { setShowDatePicker(true) }}
                        leading={() => (<Icon name="cake" size={20} />)}
                    />
                    <HelperText type="error" visible={errors.birthDate != ""} >{errors.birthDate}</HelperText>
                    <DatePicker
                        modal
                        mode="date"
                        open={showDatePicker}
                        date={birthDate}
                        onConfirm={(date) => {
                            setShowDatePicker(false)
                            setBirthDate(date)
                        }}
                        onCancel={() => {
                            setShowDatePicker(false)
                        }}
                    />
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue) =>
                            setGender(itemValue)
                        }>
                        <Picker.Item label="Female" value="f" />
                        <Picker.Item label="Male" value="m" />
                    </Picker>
                    <HelperText type="error" visible={errors.gender != ""} >{errors.gender}</HelperText>
                    <Button
                        title='Sign Up'
                        onPress={handleClick}
                    />
                </Stack>
            </ScrollView>
            {loading && <LoadingDisplay />}
        </>
    );
}

export default SignUpScreen