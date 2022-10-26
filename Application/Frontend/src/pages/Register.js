import React from 'react'
import { Link } from 'react-router-dom'


import '../App.css'
import BackgroundImage from '../assets/boun_3.png'


export default function SignUpPage() {
 
    return (
        <header style={ HeaderStyle }>
            <div className="center">
                <h2 class="h2Register">Register to MediShare</h2>
                <h5 class="h5Register">Create your personal account</h5>
                <form action="/home" >
                    <p>
                        <label>Username</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <br/>
                    <p>
                        <label>Email address</label><br/>
                        <input type="email" name="email" required />
                    </p>
                    <br/>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" required />
                    </p>
                    <br/>
                    <p>
                        <label>Date of Birth</label><br/> 
                        <input type="date" name="date" required />
                    </p>
                    <br/>
                    <label htmlFor="genderSelect">Gender</label><br/>
                    
                    <select id="genderSelect" >
                    <option value="do not want to specify" >Do not want to specify</option>
                    <option value="male">Male</option> 
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select><br/><br/>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="submit_btn" type="submit">Register</button>
                    </p>
                    <br/>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </form>
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