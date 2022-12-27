async function editPost(data,postId) {

    var formData = new FormData()

    for (var key in data) {
        console.log(key, data[key])
        formData.append(key, data[key])
    }

    const requestOptions = {
        method: "PUT",
        body: formData,
        headers: {
            //'Content-Type':  "multipart/form-data",
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         }
    }
   const url = (
    window.location.origin.replace(":3000", ":8000") + "/contmgr/post?" + new URLSearchParams({ id: postId})
)
    
    const response = await fetch( url, requestOptions)
    const resMessage = await response.json()
    if (response.status === 400) {
       
        return resMessage["error"]
    } else {
        
        return null
    }
}

export default editPost;