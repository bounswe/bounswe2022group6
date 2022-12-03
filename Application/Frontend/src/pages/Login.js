import React from 'react'
import '../App.css'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import Logo from '../assets/MediShare.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default function Login() {

    let history = useHistory()

    return (
        <header style={ HeaderStyle }>
            <div class="center">
                <h1 class="main-title text-center">Login to MediShare</h1>
                <p class="main-para text-center">Please provide your credentials</p>
                    <LoginForm>
                    </LoginForm>
                    <Button variant="success" style={{marginTop:-5}} class="primary-button" id="custom_button" size="lg" onClick={() => {history.push("/")}}> <span> Back to Landing Page </span> </Button>
                    <br/>
                    <Image src={Logo} style={{marginTop:-1}}></Image>
            </div>
        </header>
    )
}

const HeaderStyle = {
    backgroundColor: "#011e36",
    width: "100%",
    height: "100vh",
    "overflowY": "hidden",
    "overflowX": "hidden",
}