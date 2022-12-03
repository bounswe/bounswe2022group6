import React from 'react'
import {useState} from "react"

import MessageBox from './MessageBox'
import register from '../services/Register_API'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const initialErrorState = {
    username: "", 
    email: "", 
    password: "", 
    date: ""
}

function RegisterForm() {


    const [isSuccessfull, setSuccessfull] = useState(false)

    const [formData, setFormData] = useState( {
        username: "", 
        email: "", 
        password: "", 
        date: "",
        gender: "Do not want to specify"
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
            console.log("handled.")
            register(formData).then(res => {
                clearErrorState()
                if (res === null){
                    setSuccessfull(true)
                    setTimeout(() => {
                        window.location.reload();;
                      }, "1500")
                   
                } else {
                    const jsonString = JSON.parse(res.replaceAll("'", "\""))
                    var newErrors = {}
                    for (const key of Object.keys(jsonString)){
                        newErrors[key] = jsonString[key][0]
                    }
                    setErrors({...newErrors})
                }
            })
            
    }

    return (
    <div>
        <div> 
            {isSuccessfull && <MessageBox data = "Successful Registration" style = {{color: "#c2cd23", fontSize: "2rem"}}> </MessageBox>}
        </div>
        <Form style = {formStyle} onSubmit = {handleSubmit}>
            <div>
                <label style = {labelStyle} >Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} style={{backgroundColor:"#c2cb43", margin:"auto", width:"100%", border: errors.username ? '1px solid red' : '' }} required />
            </div>
            <br/>
            <div> {errors.username && <label style = {errorStyle} >{errors.username}</label>} </div>
            <br/>
            <div>
                <label style = {labelStyle} >Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={{backgroundColor:"#c2cb43", margin:"auto", width:"100%", border: errors.email ? '1px solid red' : '' }} required />
            </div>
            <br/>
            <div> {errors.email && <label style = {errorStyle} >{errors.email}</label>} </div>
            <br/>
            <div>
                <label style = {labelStyle} >Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} style={{backgroundColor:"#c2cb43", margin:"auto", width:"100%", border: errors.password ? '1px solid red' : '' }} required />
            </div>
            <br/>
            <div> {errors.password && <label style = {errorStyle}>{errors.password}</label>} </div>
            <br/>
            <div>
                <label style = {labelStyle} >Date of Birth</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} style={{backgroundColor:"#c2cb43", margin:"auto", width:"100%", border: errors.date ? '1px solid red' : '' }} required />
            </div>
            <br/>
            <div> {errors.date && <label style = {errorStyle}>{errors.date}</label>} </div>

            <br/>
            <div>
                <label style = {labelStyle} htmlFor="genderSelect">Gender</label>
            </div>
            <select name='gender' value = {formData.gender} onChange = {handleChange} id="genderSelect" style={{backgroundColor:"#c2cb43", margin:"auto", width:"100%"}}>
            <option value="do not want to specify" >Do not want to specify</option>
            <option value="male">Male</option> 
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select><br/>



            <div>
                <input type="checkbox" name="checkbox" id="checkbox" style={{backgroundColor:"#c2cb43", marginLeft: 15, marginTop:10}} required/> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
            </div>
            <br/>
            <Button variant="warning" class="primary-button" id="custom_button" type="submit" style={{fontWeight:"bold"}}>Register</Button>
        </Form>
    </div>
    )
}

const formStyle = {
    marginTop: -5,
    backgroundColor: "#dde296",
    width: "18%",
    heigth: "50%",
    border: "orange",
    borderWidth:"2px", 
    borderStyle: "solid"
}

const labelStyle = {
    marginTop: -25,
    fontWeight:"bold", 
    fontSize: 20,
    paddingLeft : "6%",
}

const errorStyle = {
    marginTop: -25,
    fontWeight:"bold", 
    fontSize: 11,
    marginLeft: 15,
    color: "red"
}

export default RegisterForm