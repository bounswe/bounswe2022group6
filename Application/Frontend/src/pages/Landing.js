import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../assets/boun_1.png'

export default function Landing() {
    return (
        <header style={ HeaderStyle }>
            <div class = "center">
                <h1 class="main-title text-center">Welcome to MediShare</h1>
                <p class="main-para text-center">Please Register or Login</p>
                <div class="buttons text-center">
                    <Link to="/login">
                        <button class="primary-button" id="home_button"> <span>log in </span></button>
                    </Link>
                    <Link to="/register">
                        <button class="primary-button" id="home_button"><span>register </span></button>
                    </Link>
                </div>
                <div class="buttons text-center">
                    <Link to="/home">
                        <button class="secondary-button" id="home_button"> <span>Continue as a guest</span></button>
                    </Link>
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
    backgroundSize: "cover"
}