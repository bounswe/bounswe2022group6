import React, { useState } from 'react';
import LoadingDisplay from '../components/LoadingDisplay';
import { Image, ScrollView, StyleSheet, View,KeyboardAvoidingView } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { handleLoginRequest } from '../authAPI';

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
      if (mail == "" || !mail.includes("@") || !mail.includes('.')) { error = true; setMailError("Please write a valid mail address!") }
      else { setMailError("") }
      if (password == "") { error = true; setPasswordError("Please write your password.") }
      else { setPasswordError("") }
      if (!error) {
        setLoading(true);

        handleLoginRequest(mail, password).then(() => {
          setLoading(false)
          setMail("")
          setPassword("")
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

  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Image style={styles.logo} source={require('../../images/logo_long.png')} />
      <View style={styles.main}> 
        <TextInput
          label="Mail"
          value={mail}
          onChangeText={(text) => setMail(text)}
          left={<TextInput.Icon name="email" color='gray'/>}
          keyboardType="email-address"
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
      <View style={styles.buttonContainer} >
        <Button mode='contained' style={styles.button}
          onPress={() => navigation.navigate('Drawer')} // Change this back to onPress={handleLogin}
        >
          Log In
        </Button>
        <Button mode='contained' style={styles.button}
          onPress={handleGoSignUp}
        >
          Sign Up
        </Button>
      </View>
      {loading && <LoadingDisplay />}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    //flexGrow: 1,
    justifyContent: 'center',
    margin: '5%',
  },
  logo: {
    alignSelf: 'center',
  },
  main: {
    marginVertical: '10%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '49%',
  },
});

export default LoginPage;