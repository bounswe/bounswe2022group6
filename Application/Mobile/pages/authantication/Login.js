import React, { useState } from 'react';
import { Stack, Button, TextInput, Text, Box, ActivityIndicator } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { login } from '../../apis/Authentication';
import LoadingDisplay from '../../components/LoadingDisplay';
import { HelperText } from 'react-native-paper';

export const LoginPage = ({ navigation }) => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const [mailError, setMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    try {
      let error = false
      if (mail == "" || !mail.includes("@") || !mail.includes('.')) { error = true; setMailError("Please write a valid mail address!") }
      else { setMailError("") }
      if (password == "") { error = true; setPasswordError("Please write your password.") }
      else { setPasswordError("") }
      if (!error) {
        setLoading(true);
        setTimeout(() => { setLoading(false); alert("Login!") }, 2000)
      }

      // login(mail, password).catch(e => {alert(e)})
    } catch (error) {
      alert(error)
    }
  }

  const handleGoSignUp = () => {
    navigation.navigate('Sign Up', { mail, password })
  }



  return (
    <>
      <Stack spacing={2} style={{ paddingTop: '12%', margin: 16, paddingBottom: 30 }}>
        <Text variant="h1">M</Text>
        <Text variant="subtitle1">Welcome! Medishare</Text>
        <Box style={{ height: "10%" }}></Box>
        <TextInput
          label="Mail"
          value={mail}
          variant='filled'
          onChangeText={(text) => setMail(text)}
          leading={() => (<Icon name="person" size={20} />)}
        />
        <HelperText type="error" visible={mailError} >{mailError}</HelperText>
        <TextInput
          label="Password"
          value={password}
          variant="filled"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPass}
          leading={() => (<Icon name="lock" size={20} />)}
          trailing={() =>
            showPass ? <Icon onPress={() => { setShowPass(!showPass) }} name="visibility" size={20} /> : <Icon onPress={() => { setShowPass(!showPass) }} name="visibility-off" size={20} />
          }
        />
        <HelperText type="error" visible={passwordError}>{passwordError}</HelperText>
        <Box style={{ height: "6%" }}></Box>
        <Stack spacing={2} direction="row" >
          <Button
            title='Log In'
            onPress={handleLogin}
            style={{ width: "50%" }}
          />
          <Button
            title='Sign Up'
            style={{ width: "50%" }}
            onPress={handleGoSignUp}
          />
        </Stack>
      </Stack>
      {loading && <LoadingDisplay />}
    </>
  );
}