async function register(data) {

    var formData = new FormData()

    for (var key in data) {
        console.log(key, data[key])
        if (key === "gender") {
            formData.append(key, data[key][0])
        }
        else if (key !== "date")
            formData.append(key, data[key])
        else {
            const splittedString = data[key].split("-")
            formData.append("birth_year", splittedString[0])
            formData.append("birth_month", splittedString[1])
            formData.append("birth_day", splittedString[2])
        }
    }

    const requestOptions = {
        method: "POST",
        header: "Content-Type: multipart/form-data",
        body: formData
    }
    console.log("Sending Request")
    
    const response = await fetch( window.location.href.replace(":3000", ":8000"), requestOptions)
    const resMessage = await response.json()
    if (response.status === 400) {
        console.log(resMessage["error"])
        return resMessage["error"]
    } else {
        return null
    }
}

export default register;