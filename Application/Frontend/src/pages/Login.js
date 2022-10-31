import React from 'react'

import '../App.css'
import BackgroundImage from '../assets/boun_2.png'
import LoginForm from '../components/LoginForm'

export default function Login() {
    return (
        <header style={ HeaderStyle }>
            <div class="center">
                <div class="text-center m-5-auto">
                    <h2 class="yellow-font">Log in to MediShare</h2>
                    <LoginForm>
                    </LoginForm>
                </div>
            </div>
        </header>

    )
}

const HeaderStyle = {
    background: `url(${BackgroundImage})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "overflow-y": "hidden",
}
