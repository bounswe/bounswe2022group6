async function contentvote(id, direction, isPost) {

    var formData = new FormData()
    formData.append('id', id)
    formData.append('vote', direction)

    const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         }
    }
    
    let url =  window.location.origin.replace(":3000", ":8000") + "/contmgr"

    
    if(isPost){
        url = url + "/postvote"
    } else {    // change to comment downvote
        url = url + "/commentvote"
    }
    
    const response = await fetch(url, requestOptions)
    const resMessage = await response.json()

    console.log(resMessage)
    return resMessage
}

export default contentvote;