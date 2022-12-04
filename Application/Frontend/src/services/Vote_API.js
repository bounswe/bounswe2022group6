async function contentvote(id, direction, isPost) {

    var formData = new FormData()
    formData.append('id', id)


    const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         }
    }
    
    let url =  window.location.origin.replace(":3000", ":8000") + "/contmgr"

    
    if(isPost){
        url = url + "/post"
    } else {    // change to comment downvote
        url = url + "/comment"
    }

    if (direction === 'up') {
        url = url + "vote"
    }
    else {   // change to post downvote
        url = url + "vote"
    }
    const response = await fetch(url, requestOptions)
    const resMessage = await response.json()

    console.log(resMessage)
    return resMessage
}

export default contentvote;