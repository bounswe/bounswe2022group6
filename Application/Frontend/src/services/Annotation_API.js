export async function createAnnotation(annoType, contentType, contentId, anno){
    
    var formData = new FormData()

    formData.append("annotation_type", annoType)
    formData.append("content_type", contentType)
    formData.append("content_id", contentId)
    formData.append("jsonld", anno)

    const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         }
    }

    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/contmgr/annotations", requestOptions)
    const resMessage = await response.json()

    if (response.status !== 200) {
        return resMessage["error"]
    } else {
        console.log(resMessage)
        return resMessage
    }

}

export async function deleteAnnotation(annoId, annoType){

    var formData = new FormData()

    formData.append("annotation_id", annoId)
    formData.append("annotation_type", annoType)

    const requestOptions = {
        method: "DELETE",
        body: formData,
        headers: {
            'Authorization': 'Token ' + window.localStorage.getItem("auth_token") 
         }
    }

    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/contmgr/annotations", requestOptions)
    const resMessage = await response.json()

    if (response.status !== 200) {
        return resMessage["error"]
    } else {
        console.log(resMessage)
        return resMessage
    }
}