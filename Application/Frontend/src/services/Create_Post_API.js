async function create_post(data) {

    var formData = new FormData()

    formData.append("title", data["title"]);
    formData.append("description", data["description"])
    formData.append("type", data["type"])
    const tmp = data["imageURL"]
    if(tmp){
        formData.append("imageURL", tmp.substring(0,tmp.indexOf("/")) + ".s3.amazonaws.com" + tmp.substring(tmp.indexOf("/")))
    }
    var labels = []
    for (let index = 0; index < data["labels"].length; index++) {
        labels[index] = {
            labelID: data["labels"][index]["value"],
            labelName: data["labels"][index]["label"]
        }
        
    }
    
    formData.append("labels", labels)

    const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         }
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/contmgr/post", requestOptions)
    const resMessage = await response.json()

    if (response.status === 200 || response.status === 201) {
        return null
    } else {
        return resMessage["error"]
    }
}

export default create_post;