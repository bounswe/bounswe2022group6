export default async function getPostById(postId) {

    const requestOptions = {
        method: "GET",
    }

    const url = (
        window.location.origin.replace(":3000", ":8000") + "/contmgr/post?" + new URLSearchParams({ id: postId})
    )

    const response = await fetch(url, requestOptions)
    const resMessage = await response.json()
    //since id is missing in the response
    resMessage.id = postId
    if (response.status !== 200) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        return resMessage
    }
}


export async function getAllPosts() {

    const requestOptions = {
        method: "GET",
    }

    const response = await fetch( window.location.origin.replace(":3000", ":8000") + "/contmgr/allposts", requestOptions)
    const resMessage = await response.json()


    if (response.status !== 200) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        return resMessage.posts
    }
}