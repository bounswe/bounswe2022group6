import { AsyncStorage } from 'react-native';
import { handleLogoutRequest } from './authAPI';


export const handleGetUserData = async () => {
    const token = await AsyncStorage.getItem("token")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return await fetch("http://18.206.229.240:8000/profile/", requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(async (responseJson) => {
            console.log(responseJson)
            if (responseJson.detail) {
                throw new Error(responseJson.detail)
                handleLogoutRequest()
            } else {
                return responseJson
            }
        })
}