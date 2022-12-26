import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL } from '@env'

export const editProfileRequest = async (changedData) => {
    const token = await AsyncStorage.getItem("token")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);

    var formdata = new FormData();

    Object.keys(changedData).forEach((key) => {
        formdata.append(key, changedData[key])
    });

    const requestOptions = {
        method: 'POST',
        body: formdata,
        headers: myHeaders,
    };
    
    try {
        const response = await fetch(BACKEND_URL + "profile/", requestOptions)
        const json = await response.json()
        return json
    } catch (error) {
        console.log("Error: ", error)
    }
}