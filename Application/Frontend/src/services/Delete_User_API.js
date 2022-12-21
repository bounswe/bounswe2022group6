async function delete_account() {

    const requestOptions = {
        method: "DELETE",
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         },
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/profile", requestOptions)
    const resMessage = await response.json()

    if (response.status === 400) {
        return resMessage["error"]
    } else {
        return null
    }
}

export default delete_account;