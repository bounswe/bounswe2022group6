<<<<<<< HEAD
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
// AUTHOR: BEDIRHAN PAMUKCUOGLU

import React, { useState } from 'react';
import { View } from 'react-native';
import { Stack, Button, TextInput, Text, Box, ActivityIndicator } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from '../../apis/Authentication';

export const LoginPage = ({ navigation }) => {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
=======
import React, { useState } from 'react';
import { Stack, Button, TextInput, Text, Box, ActivityIndicator } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingDisplay from '../components/LoadingDisplay';
import { HelperText } from 'react-native-paper';
import { handleLoginRequest } from '../authAPI';

export const LoginPage = ({ navigation }) => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
>>>>>>> 5b9bcb000cddf5bcc036ca8c1a7cb20096aa4d2e

  const [mailError, setMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    try {
<<<<<<< HEAD
      login(mail, password).catch(e => { alert(e); });
    } catch (error) {
      alert('ase');
      alert(error);
    }
  };
=======
      let error = false
      if (mail == "" || !mail.includes("@") || !mail.includes('.')) { error = true; setMailError("Please write a valid mail address!") }
      else { setMailError("") }
      if (password == "") { error = true; setPasswordError("Please write your password.") }
      else { setPasswordError("") }
      if (!error) {
        setLoading(true);

        handleLoginRequest(mail, password).then(() => {
          setLoading(false)
          navigation.navigate("Drawer")
        }).catch(err => {
          setLoading(false)
          alert(err)
        })
      }

    } catch (error) {
      alert(error)
    }
  }

  const handleGoSignUp = () => {
    navigation.navigate('Sign Up', { mail, password })
  }
>>>>>>> 5b9bcb000cddf5bcc036ca8c1a7cb20096aa4d2e



  return (
<<<<<<< HEAD
    <Stack spacing={2} style={{ paddingTop: '20%', margin: 16, paddingBottom: 30 }}>
      <Text variant="h1">M</Text>
      <Text variant="subtitle1">Welcome! Medishare</Text>
      <Box style={{ height: '10%' }} />
      <TextInput
        label="Mail"
        value={mail}
        variant="filled"
        onChangeText={(text) => setMail(text)}
        leading={() => (<Icon name="user" size={20} />)}
      />
      <TextInput
        label="Password"
        value={password}
        variant="filled"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPass}
        leading={() => (<Icon name="lock" size={20} />)}
        trailing={() =>
          showPass ? <Icon onPress={() => { setShowPass(!showPass); }} name="eye" size={20} /> : <Icon onPress={() => { setShowPass(!showPass); }} name="eye-slash" size={20} />
        }
      />
      <Stack spacing={2} direction="row" >
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Drawer')}
          style={{ width: '50%' }} cdcd
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Sign Up')}
          style={{ width: '50%' }}
=======
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
>>>>>>> 5b9bcb000cddf5bcc036ca8c1a7cb20096aa4d2e
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
<<<<<<< HEAD
};
=======
}
>>>>>>> 5b9bcb000cddf5bcc036ca8c1a7cb20096aa4d2e
