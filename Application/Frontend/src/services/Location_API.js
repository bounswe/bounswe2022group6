async function get_location(country,state) {

    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         },
    }
    var url = window.location.origin.replace(":3000", ":8000") + "/locmgr/info"
    if (country){
        if(state){
            url = url + "?country=" + country + "&state=" + state
        } else {
            url = url + "?country=" + country
        }
    }
    
    const response = await fetch(url, requestOptions)
    const resMessage = await response.json()

    if (response.status === 401) {
        return resMessage["error"]
    } else {
        return resMessage
    }
}

export default get_location;