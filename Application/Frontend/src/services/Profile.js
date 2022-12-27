async function view_profile(username) {

    const requestOptions = {
        method: "GET",
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/viewprofile?username=" + username, requestOptions)
    const resMessage = await response.json()

    if (response.status === 400) {
        return resMessage["error"]
    } else {
        return resMessage
    }
}

export default view_profile;