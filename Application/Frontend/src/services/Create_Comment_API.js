async function createComment(data, parentId) {
    //creates comment for post not comment may implement later
    var formData = new FormData()

    for (var key in data) {
        formData.append(key, data[key])
    }
    formData.append("parent_post_id", parentId)

    const requestOptions = {
        method: "POST",
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         },
        body: formData
    }
    
    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/contmgr/comment", requestOptions)
    const resMessage = await response.json()
    if (response.status === 400) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        return null
    }
}

export default createComment;