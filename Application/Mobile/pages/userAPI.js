import { AsyncStorage } from 'react-native';
import { handleLogoutRequest } from './authAPI';
import {BACKEND_URL} from '@env'

export const handleGetUserData = async () => {
    const token = await AsyncStorage.getItem("token")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return await fetch(BACKEND_URL + "profile/", requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(async (responseJson) => {
            if (responseJson.detail) {
                throw new Error(responseJson.detail)
                handleLogoutRequest()
            } else {
                return responseJson
            }
        })
}