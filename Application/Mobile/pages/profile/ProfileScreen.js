import React from "react";
import { View, Text, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigator = useNavigation();
    return (
        <ScrollView>
            <View>
                <Text>
                    Profile Page!
                </Text>
                <Button title='Edit profile'
                    onPress={() => navigator.navigate('EditProfile')}
                />
            </View>
        </ScrollView>
    )
}


export default ProfileScreen;