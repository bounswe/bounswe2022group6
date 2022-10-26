import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../assets/boun_2.png'
export default function Login() {
    return (
        <header style={ HeaderStyle }>
            <div class="center">
                <div class="text-center m-5-auto">
                    <h2 class="yellow-font">Log in to MediShare</h2>
                    <form action="/home">
                        <p>
                            <label>Username or email address</label><br/>
                            <input type="text" name="first_name" required />
                        </p>
                        <br/>
                        <p>
                            <label>Password</label>
                            <br/>
                            <input type="password" name="password" required />
                        </p>
                        <br/>
                        <p>
                            <button id="submit_btn" type="submit">Login</button>
                        </p>
                        <br/>
                        <p>First time? <Link to="/register">Create an account</Link>.</p>
                        <p><Link to="/">Back to Homepage</Link>.</p>
                    </form>
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
