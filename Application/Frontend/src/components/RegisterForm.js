import React from 'react'
import { Link } from 'react-router-dom'


function RegisterForm(props) {

    return (
    <form onSubmit = {props.handleSubmit}>
        <div>
            <label>Username</label><br/>
            <input type="text" name="username" value={props.formData.username} onChange={props.handleChange} required />
        </div>
        <br/>
        <div>
            <label>Email address</label><br/>
            <input type="email" name="email" value={props.formData.email} onChange={props.handleChange} required />
        </div>
        <br/>
        <div>
            <label>Password</label><br/>
            <input type="password" name="password" value={props.formData.password} onChange={props.handleChange} required />
        </div>
        <br/>
        <div>
            <label>Date of Birth</label><br/> 
            <input type="date" name="date" value={props.formData.date} onChange={props.handleChange} required />
        </div>
        <br/>

        <label htmlFor="genderSelect">Gender</label><br/>
        <select id="genderSelect" >
        <option value="do not want to specify" >Do not want to specify</option>
        <option value="male">Male</option> 
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select><br/><br/>

        <div>
            <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
        </div>
        <p>
            <button id="submit_btn" type="submit">Register</button>
        </p>
        <br/>
        <p><Link to="/">Back to Homepage</Link>.</p>
    </form>
    )
}

export default RegisterForm