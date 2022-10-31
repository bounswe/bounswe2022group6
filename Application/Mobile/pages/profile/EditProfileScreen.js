import React from "react";
import { View, Text, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
    const navigator = useNavigation();

    return (
        <View>
            <Text>
                You are editing your profile
            </Text>
            <Button title='Save Changes!' onPress={() => navigator.navigate('Profile')} />
            <Button title='Discard Changes.' onPress={() => navigator.navigate('Profile')} />
        </View>
    )
}

export default EditProfileScreen;