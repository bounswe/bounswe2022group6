import React from 'react'
import RegisterForm from '../components/RegisterForm'
import '../App.css'
import { useHistory } from 'react-router-dom'
import Logo from '../assets/MediShare.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default function Register() {

    let history = useHistory()

    return (
            <header style={ HeaderStyle }>
                <div className="center">
                    <h1 class="main-title text-center">Register to MediShare</h1>
                    <p class="main-para text-center">Create your personal account</p>
                    <RegisterForm>
                    </RegisterForm>
                    <Button variant="success" style={{marginTop:-5}} class="primary-button" id="custom_button" size="lg" onClick={() => {history.push("/")}}> <span> Back to Landing Page </span> </Button>
                    <br/>
                    <Image style={{marginTop:-1}} src={Logo}></Image>
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