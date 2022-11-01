import { AsyncStorage } from 'react-native';


export const handleLoginRequest = async (mail, password) => {
    console.log(mail, password)

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "csrftoken=6dxfJjSizpYVyqWGFHvGGLbHCsLrT99U; sessionid=5fbwt9emt2umx4ntcejaav7ltvzhg11g");

    var formdata = new FormData();
    formdata.append("useridentifier", mail);
    formdata.append("password", password);

    await fetch("http://18.206.229.240:8000/login", {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    }).then(function (response) {
        return response.json();
    })
        .then(async (responseJson) => {
            if (responseJson.error && responseJson.error.length > 0) {
                console.log(responseJson.error)
                let errs = JSON.parse(responseJson.error.replaceAll("'", "\""))
                throw new Error(errs[Object.keys(errs)[0]] + "!")
            } else {
                await AsyncStorage.setItem(
                    'token',
                    responseJson.token
                );
            }
        })
}


export const handleSignUpRequest = async (mail, password, username, gender, birth_date, birth_month, birth_year) => {
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", mail);
    formdata.append("password", password);
    formdata.append("gender", gender);
    formdata.append("birth_day", birth_date);
    formdata.append("birth_month", birth_month);
    formdata.append("birth_year", birth_year);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    await fetch("http://18.206.229.240:8000/register/", requestOptions)
    .then(function (response) {
        return response.json();
    })
        .then(async (responseJson) => {
            if (responseJson.error && responseJson.error.length > 0) {
                console.log(responseJson.error)
                let errs = JSON.parse(responseJson.error.replaceAll("'", "\""))
                throw new Error(errs[Object.keys(errs)[0]])
            } 
        })
}

export const handleLogoutRequest = async () => {
    const token = await AsyncStorage.getItem("token")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://18.206.229.240:8000/logout/", requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(async (responseJson) => {
            if (responseJson.error) {
                let errs = JSON.parse(responseJson.error.replaceAll("'", "\""))
                throw new Error(errs[Object.keys(errs)[0]])
            } else {
                await AsyncStorage.setItem("token", "")
                return alert(responseJson.info)
            }
        })
}