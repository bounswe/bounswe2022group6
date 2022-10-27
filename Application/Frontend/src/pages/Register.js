import React from 'react'


import RegisterForm from '../components/RegisterForm'
import '../App.css'
import BackgroundImage from '../assets/boun_3.png'

async function sendRequest(data) {

    var formData = new FormData()

    for (var key in data) {
        console.log(key, typeof data[key])
        if (key !== "date")
            formData.append(key, data[key])
        else {
            const splittedString = data[key].split("-")
            formData.append("birth_year", splittedString[0])
            formData.append("birth_month", splittedString[1])
            formData.append("birth_day", splittedString[2])
        }
    }
    formData.append("gender", "m")

    const requestOptions = {
        method: "POST",
        header: "Content-Type: multipart/form-data",
        body: formData
    }
    console.log("Sending Request")
    
    const response = await fetch("/register", requestOptions)
    const resMessage = await response.json()
    if (response.status === 400) {
        return resMessage["error"]
    } else {
        return null
    }
}

export default function Register() {


    const [formData, setFormData] = useState( {
        username: "", 
        email: "", 
        password: "", 
        date: "", 
    } )

    function handleChange(event) {
        console.log(event)
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = event => {
            event.preventDefault()
            console.log("test")
            sendRequest(formData).then(res => {
                console.log(res)
            })
            
    }

    return (
            <header style={ HeaderStyle }>
                <div className="center">
                    <h2 class="h2Register">Register to MediShare</h2>
                    <h5 class="h5Register">Create your personal account</h5>
                    <RegisterForm 
                    handleChange = {handleChange} 
                    handleSubmit = {handleSubmit} 
                    formData = {formData}>
                    </RegisterForm>
                </div>
            </header>
        )

}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}