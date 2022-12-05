async function logout() {

    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         },
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/logout", requestOptions)
    const resMessage = await response.json()
    console.log(resMessage)
    if (response.status === 401) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        window.localStorage.removeItem("auth_token")
        window.localStorage.removeItem("username")

        return null
    }
}

export default logout;