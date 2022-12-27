async function login(data) {

    var formData = new FormData()

    formData.append("useridentifier", data["useridentifier"]);
    formData.append("password", data["password"])

    const requestOptions = {
        method: "POST",
        header: "Content-Type: multipart/form-data",
        body: formData
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/login", requestOptions)
    const resMessage = await response.json()
    if (response.status === 400 || response.status === 401) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        window.localStorage.setItem("auth_token",resMessage["token"])
        window.localStorage.setItem("username", data["useridentifier"]) //for checking post vote info hope not login with email. 
        return null
    }
}

export default login;