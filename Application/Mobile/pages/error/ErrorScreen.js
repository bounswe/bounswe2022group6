/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const ErrorScreen = ({ navigation }) => {
    return (
        <View spacing={2} style={{ justifyContent: 'flex-start', alignItems: 'center', paddingTop: '20%', margin: 16, paddingBottom: 30 }}>
            <Image
                resizeMode={'contain'}
                style={{ width: 200, height: 200 }}
                source={{ uri: 'https://cdn.pixabay.com/photo/2012/04/13/00/21/button-31222_960_720.png' }}
            ></Image>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                Unexpected Error!</Text>
            <Button
                title="Return to Home Page"
                onPress={() => navigation.navigate('Drawer')}
                style={{ width: '50%' }}
            />
        </View>

    )
}

export default ErrorScreen;