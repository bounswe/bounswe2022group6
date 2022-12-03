import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from "react"
import login from '../services/Login_API'
import MessageBox from './MessageBox'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const initialErrorState = {
    useridentifier: "",
    password: ""
}

function LoginForm() {

    let history = useHistory()

    const [isSuccessfull, setSuccessfull] = useState(false)

    const [formData, setFormData] = useState({
        useridentifier: "",
        password: "",
    })

    const [errors, setErrors] = useState(initialErrorState)

    const clearErrorState = () => {
        setErrors({ ...initialErrorState })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(formData).then(res => {
            clearErrorState()
            if (res === null) {
                setSuccessfull(true)
                setTimeout(() => {
                    history.push('/home');
                }, "1500")

            } else {
                const jsonString = JSON.parse(res.replaceAll("'", "\""))
                var newErrors = {}
                for (const key of Object.keys(jsonString)) {
                    console.log(key)
                    if (key === "username" || key === "email") {
                        newErrors["useridentifier"] = jsonString[key][0]
                    } else {
                        newErrors[key] = jsonString[key][0]
                    }

                }
                setErrors({ ...newErrors })
            }
        })

    }
    return (
        <div>
            <div> 
                {isSuccessfull && <MessageBox data="Login Successful!" style={{color: "#c2cd23", fontSize: "2rem"}}> </MessageBox>}
            </div>
            <Form style={formStyle} onSubmit={handleSubmit}>
                <div>
                    <label style = {labelStyle} >Username or email address</label>
                    <input type="text" name="useridentifier" value={formData.useridentifier} onChange={handleChange} style={{backgroundColor:"#c2cb43", margin:"auto", width:"100%", border: errors.useridentifier ? '1px solid red' : '' }} required />
                </div>
                <br />
                <div> {errors.useridentifier && <label style={errorStyle} >{errors.useridentifier}</label>} </div>
                <br />
                <div>
                    <label style = {labelStyle} >Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} style={{backgroundColor:"#c2cb43", margin:"auto", width:"100%", border: errors.password ? '1px solid red' : '' }} required />
                </div>
                <br />
                <div>  {errors.password && <label style={errorStyle}>{errors.password}</label>} </div>
                <br/>
                <Button variant="warning" class="primary-button" id="custom_button" type="submit" style={{fontWeight:"bold"}}>Login</Button>
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
    marginTop: -10,
    fontWeight:"bold", 
    fontSize: 20,
    marginLeft: -5,
}

const errorStyle = {
    marginTop: -20,
    fontWeight:"bold", 
    fontSize: 15,
    marginLeft: -5,
    color: "red"
}

export default LoginForm;
