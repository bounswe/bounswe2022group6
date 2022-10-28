import React from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import {useState} from "react"
import { Link } from 'react-router-dom'

import register from '../services/API'

const initialErrorState = {
    username: "", 
    email: "", 
    password: "", 
    date: ""
}

function RegisterForm() {

    let history = useHistory()

    const [formData, setFormData] = useState( {
        username: "", 
        email: "", 
        password: "", 
        date: "",
        gender: ""
    } )

    const [errors, setErrors] = useState(initialErrorState)

    const clearErrorState = () => {
        setErrors({...initialErrorState})
    }

    function handleChange(event) {
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
            register(formData).then(res => {
                if (res === null){
                    history.push('/login')
                } else {
                    const jsonString = JSON.parse(res.replaceAll("'", "\""))
                    clearErrorState()
                    var newErrors = {}
                    for (const key of Object.keys(jsonString)){
                        newErrors[key] = jsonString[key][0]
                    }
                    setErrors({...newErrors})
                }
            })
            
    }

    return (
    <form style = {formStyle} onSubmit = {handleSubmit}>
        <div>
            <label style = {{paddingLeft : "40%"}} >Username</label><br/>
            <input type="text" name="username" value={formData.username} onChange={handleChange} style={{ border: errors.username ? '1px solid red' : '' }} required />
        </div>
        <div> {errors.username && <label style = {{paddingLeft : "15%"}} >{errors.username}</label>} </div>
        <br/> 
        <br/>
        <div>
            <label style = {{paddingLeft : "40%"}} >Email address</label><br/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ border: errors.email ? '1px solid red' : '' }} required />
        </div>
        <div> {errors.email && <label style = {{paddingLeft : "27%"}} >{errors.email}</label>} </div>
        <br/>
        <br/>
        <div>
            <label style = {{paddingLeft : "40%"}} >Password</label><br/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ border: errors.password ? '1px solid red' : '' }} required />
        </div>
        <div> {errors.password && <label>{errors.password}</label>} </div>
        <br/>
        <div>
            <label style = {{paddingLeft : "40%"}} >Date of Birth</label><br/> 
            <input type="date" name="date" value={formData.date} onChange={handleChange} style={{ border: errors.date ? '1px solid red' : '' }} required />
        </div>
        <div> {errors.date && <label>{errors.date}</label>} </div>

        <br/>

        <label style = {{paddingLeft : "40%"}} htmlFor="genderSelect">Gender</label><br/>
        <select name='gender' value = {formData.gender} onChange = {handleChange} id="genderSelect" >
        <option value="do not want to specify" >Do not want to specify</option>
        <option value="male">Male</option> 
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select><br/><br/>

        <div>
            <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
        </div>
        <p>
            <button id="submit_btn" type="submit">Register</button>
        </p>
        <br/>
        <p><Link to="/">Back to Homepage</Link>.</p>
    </form>
    )
}

const formStyle = {
    width: "30%",
    heigth: "50%"
}

const labelStyle = {
    display: 'inline-block',
    textAlign: 'right',
    float: "left",
}

const inputStyle = {
    display: "inline-block",
    textAlign: "left",
    float: "right"
}

export default RegisterForm