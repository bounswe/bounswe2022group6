import React, { useState } from 'react';
import LoadingDisplay from '../components/LoadingDisplay';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, TextInput, HelperText, Text } from 'react-native-paper';
import { handleLoginRequest } from '../authAPI';
import { handleGetUserData } from '../userAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

// The login page
const LoginPage = ({ navigation }) => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const [mailError, setMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    try {
      let error = false
      if (password == "") { error = true; setPasswordError("Please write your password.") }
      else { setPasswordError("") }
      if (!error) {
        setLoading(true);

        handleLoginRequest(mail, password).then(() => {
          setLoading(false)
          setMail("")
          setPassword("")

          // Get username and store it
          handleGetUserData().then((response) => {
            navigation.navigate("Drawer", {
              screen: "Home Screen",
              username: response.username,
              params: {
                username: response.username,
                screen: 'Home Feed',
                params: {
                  username: response.username
                }}})
          })
        }).catch(err => {
          setLoading(false)
          alert(err)
        })
      }

    } catch (error) {
      alert(error)
    }
  }

  const handleGuestLogin = () => {
    navigation.navigate('Drawer', {username: null})
  }
  const handleGoSignUp = () => {
    navigation.navigate('Sign Up')
  }

  return (
    <ScrollView contentContainerStyle={styles.body}>
        <Image style={styles.logo} source={require('../../images/logo_long.png')} />
      <View style={styles.main}> 
        <TextInput
          label="Username/Mail"
          value={mail}
          onChangeText={(text) => setMail(text)}
          left={<TextInput.Icon name="account" color='gray'/>}
          keyboardType="account"
        />
        <HelperText type="error" visible={mailError} >{mailError}</HelperText>

        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPass}
          keyboardType={showPass ? 'visible-password' : 'default'}
          left={<TextInput.Icon name="lock" color='gray' />}
          right={<TextInput.Icon name={showPass? 'eye' : 'eye-off'} color='gray' forceTextInputFocus={false} onPress={() => { setShowPass(!showPass) }} />}
        />
        <HelperText type="error" visible={passwordError}>{passwordError}</HelperText>
      </View>
      <View style={styles.buttonContainer}>
      <View style={styles.loginSignupButtons} >
        <Button mode='contained' style={styles.button}
          onPress={handleLogin}
        >
          Log In
        </Button>
        <Button mode='contained' style={styles.button}
          onPress={handleGoSignUp}
        >
          Sign Up
        </Button>
      </View>
      </View>
      {loading && <LoadingDisplay />}
      <Text style={styles.guest} onPress={handleGuestLogin}>Login as Guest</Text>
      <Text style={styles.guest} onPress={() => {console.log('Forgot password!')}}>Forgot password?</Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    justifyContent: 'center',
    margin: '5%',
  },
  logo: {
    width: '90%',
    height: undefined,
    aspectRatio: 11/3,
    alignSelf: 'center',
  },
  main: {
    marginVertical: '10%',
  },
  buttonContainer: {
  },
  loginSignupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '49%',
  },
  guest: {
    alignSelf: 'center',
    marginVertical: 1,
    color: 'gray',
    marginTop: 20,
  },
});

export default LoginPage;