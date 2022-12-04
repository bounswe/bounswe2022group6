async function edit() {

    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         },
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/profile", requestOptions)
    const resMessage = await response.json()
    //console.log(resMessage)
   // console.log(window.localStorage.getItem("auth_token") )
    if (response.status === 401) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        return resMessage
    }
}

export default edit;