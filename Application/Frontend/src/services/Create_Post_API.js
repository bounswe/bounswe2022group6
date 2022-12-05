async function create_post(data) {

    var formData = new FormData()

    formData.append("title", data["title"]);
    formData.append("description", data["description"])
    formData.append("type", data["type"])
    const tmp = data["imageURL"]
    formData.append("imageURL", tmp.substring(0,tmp.indexOf("/")) + ".s3.amazonaws.com" + tmp.substring(tmp.indexOf("/")))

    const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         }
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/contmgr/post", requestOptions)
    const resMessage = await response.json()
    console.log(resMessage)
    if (response.status === 200 || response.status === 201) {
        console.log("post created successfully.")
    }
}

export default create_post;