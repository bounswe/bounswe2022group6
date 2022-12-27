//sort_type represent either the given parameter is text or label.
export default async function search_post(string, sort_type) {

    const requestOptions = {
        method: "GET",
    }
    var url = window.location.origin.replace(":3000", ":8000") + "/contmgr/searchpost?"
    if (sort_type === "t"){
        url = url + "keyword=" + string
    } else if (sort_type === "l"){
        // If at least 1 label is selected.
        if (string.length >= 1){
            url = url + "label=" + string[0]["labelName"]
            for (let index = 0; index < string.length -1; index++) {
                url = url + "&label=" + string[index+1]["labelName"]
            }
        } else {
            url +="keyword="
        }
    }

    const response = await fetch(url, requestOptions)
    const resMessage = await response.json()

    if (response.status !== 200) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        return resMessage
    }
}