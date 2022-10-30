import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from "react"
import { Link } from 'react-router-dom'
import login from '../services/Login_API'
import MessageBox from './MessageBox'

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
                    newErrors[key] = jsonString[key][0]
                }
                setErrors({ ...newErrors })
            }
        })

    }

    // return(
    //     <form action="/home">
    //         <p>
    //             <label>Username or email address</label><br/>
    //             <input type="text" name="identifier" required />
    //         </p>
    //         <br/>
    //         <p>
    //             <label>Password</label>
    //             <br/>
    //             <input type="password" name="password" required />
    //         </p>
    //         <br/>
    //         <p>
    //             <button id="submit_btn" type="submit">Login</button>
    //         </p>
    //         <br/>
    //         <p>First time? <Link to="/register">Create an account</Link>.</p>
    //         <p><Link to="/">Back to Homepage</Link>.</p>
    //     </form>
    // )

    return (
        <div>
            <div> {isSuccessfull && <MessageBox data="Login Successful!" style={{ color: "#222", fontSize: "2.5rem", textTransform: "capitalize" }}> </MessageBox>}
            </div>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div>
                    <label style={{ paddingLeft: "30%" }} >Username or email address</label><br />
                    <input type="text" name="useridentifier" value={formData.useridentifier} onChange={handleChange} style={{ border: errors.useridentifier ? '1px solid red' : '' }} required />
                </div>
                <div> {errors.useridentifier && <label style={{ paddingLeft: "15%" }} >{errors.useridentifier}</label>} </div>
                <br />
                <br />
                <div>
                    <label style={{ paddingLeft: "40%" }} >Password</label><br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ border: errors.password ? '1px solid red' : '' }} required />
                </div>
                <div> {errors.password && <label>{errors.password}</label>} </div>
                <br />
                <p>
                    <button id="submit_btn" type="submit">Login</button>
                </p>
                <br />
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </form>
        </div>
    )
}

const formStyle = {
    width: "30%",
    heigth: "50%"
}

export default LoginForm;
