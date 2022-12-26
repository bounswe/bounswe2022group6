import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL } from '@env'

// HTTP requests with the endpoint "profile/":

// Edit profile endpoint (POST method)
// changedData: object containing only the changed data when editing a profile
export const editProfileRequest = async (changedData) => {
    // Add token to header
    const token = await AsyncStorage.getItem("token")
    var myHeaders = new Headers()
    myHeaders.append("Authorization", "Token " + token);

    var formdata = new FormData(); // Form data (required for POST method)

    // Append each property of changedData to formdata
    Object.keys(changedData).forEach((key) => {
        formdata.append(key, (changedData[key] ?? ""))
    });

    // Request options (POST request)
    const requestOptions = {
        method: 'POST',
        body: formdata,
        headers: myHeaders,
    };
    
    // Send request
    try {
        const response = await fetch(BACKEND_URL + "profile/", requestOptions)
        const json = await response.json()
        return json
    } catch (error) {
        console.log("Error: ", error)
    }
}

// Delete profile endpoint (DELETE method)
export const deleteProfileRequest = async () => {

    // Add token to header
    const token = await AsyncStorage.getItem("token")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);

    // Request options
    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders
    }

    // Send request
    try {
        const response = await fetch(BACKEND_URL + 'profile/', requestOptions)
        const json = await response.json()
        return json
    } catch(error) {
        console.log("Error: ", error)
    }
} 