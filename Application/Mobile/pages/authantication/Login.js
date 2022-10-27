// AUTHOR: BEDIRHAN PAMUKCUOGLU

import React, { useState } from 'react';
import { View } from 'react-native';
import { Stack, Button, TextInput, Text, Box, ActivityIndicator } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from '../../apis/Authentication';

export const LoginPage = () => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)

  const handleClick = () => {
    try {
      login(mail, password).catch(e => {alert(e)})
    } catch (error) {
      alert("ase")
      alert(error)      
    }  
  }



  return (
    <Stack spacing={2} style={{ paddingTop: '20%', margin: 16, paddingBottom: 30 }}>
      <Text variant="h1">M</Text>
      <Text variant="subtitle1">Welcome! Medishare</Text>
      <Box style={{ height: "10%" }}></Box>
      <TextInput
        label="Mail"
        value={mail}
        variant='filled'
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
          showPass ? <Icon onPress={() => { setShowPass(!showPass) }} name="eye" size={20} /> : <Icon onPress={() => { setShowPass(!showPass) }} name="eye-slash" size={20} />
        }
      />
      <Stack spacing={2} direction="row" >
        <Button
          title='Log In'
          onPress={handleClick}
          style={{ width: "50%" }}
        />
        <Button
          title='Sign Up'
          style={{ width: "50%" }}
        />
      </Stack>

    </Stack>
  );
}