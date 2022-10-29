import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text>
                Home feed will be here.
            </Text>
        </View>
    )
}

export default HomeScreen;