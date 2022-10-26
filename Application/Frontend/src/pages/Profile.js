import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
    
    return (
        <div className="center" >
            <h1 className="profile-title home-page-title">Your Profile</h1>
            <form >
            <p>
                        <label>Username</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Name</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Surname</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Email address</label><br/>
                        <input type="email" name="email" required />
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" requiredc />
                    </p>
                    <p>
                        <label>Date of Birth</label><br/>
                        <input type="date" name="date" requiredc />
                    </p>

                    <label htmlFor="genderSelect">Gender</label><br/>
                    
                    <select id="genderSelect" >
                    <option value="">select</option>
                    <option value="male">Male</option> 
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="do not want to specify">Do not want to specify</option>
                    </select><br/><br/>
                    <button  className="edit-button">
                        Edit
                    </button>
                
                    
                </form>
                <div> 
            <Link to="/home">
            <button className="primary-button">Homepage</button>
            </Link>

            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>

                </div>
        </div>
    )
}
