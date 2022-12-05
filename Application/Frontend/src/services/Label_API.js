async function get_labels() {

    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         },
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/contmgr/labels", requestOptions)
    const resMessage = await response.json()

    if (response.status === 401) {
        return resMessage["error"]
    } else {
        console.log(resMessage)
        return resMessage
    }
}

export default get_labels;