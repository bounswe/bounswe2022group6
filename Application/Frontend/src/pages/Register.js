import React from 'react'


import RegisterForm from '../components/RegisterForm'
import '../App.css'
import BackgroundImage from '../assets/boun_3.png'


export default function Register() {


    return (
            <header style={ HeaderStyle }>
                <div className="center">
                    <h2 class="h2Register">Register to MediShare</h2>
                    <h5 class="h5Register">Create your personal account</h5>
                    <RegisterForm>
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