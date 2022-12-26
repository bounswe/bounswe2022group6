export default async function search_post(keyword) {

    const requestOptions = {
        method: "GET",
    }

    const response = await fetch(window.location.origin.replace(":3000", ":8000") + "/contmgr/searchpost?keyword=" + keyword, requestOptions)
    const resMessage = await response.json()

    if (response.status !== 200) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        return resMessage
    }
}