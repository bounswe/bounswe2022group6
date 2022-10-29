import React from "react";
import { View, Text, Button } from 'react-native';

const SignUpScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Sign up page will be implemented here!</Text>
            <Button title="Go back" onPress={navigation.goBack}
            />
        </View>
    )
}

export default SignUpScreen;