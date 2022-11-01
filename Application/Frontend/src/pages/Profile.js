import React from 'react'
import { Link } from 'react-router-dom'
import logout from "../services/Logout_API";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import MessageBox from "../components/MessageBox";

export default function Profile() {

    let history = useHistory()

    const [isLoggedout, setLoggedout] = useState(false)
  
    function handleClick(event) {
      event.preventDefault()
      logout().then(res => {
          if (res === null) {
              setLoggedout(true)
              setTimeout(() => {
                  history.push('/');
              }, "1500")
  
          }
      })
    }
    
    return (
        <div className="center" >
            <h1 className="profile-title home-page-title">Your Profile</h1>
            <div> {isLoggedout && <MessageBox data="Logout Successful!" style={{ color: "#222", fontSize: "2.5rem", textTransform: "capitalize" }}> </MessageBox>}
            </div>
            <form >
            <p>
                        <label>Username</label><br/>
                        <input type="text" name="first_name" />
                    </p>
                    <br/>
                    <p>
                        <label>Name</label><br/>
                        <input type="text" name="first_name" />
                    </p>
                    <br/>
                    <p>
                        <label>Surname</label><br/>
                        <input type="text" name="first_name" />
                    </p>
                    <br/>
                    <p>
                        <label>Email address</label><br/>
                        <input type="email" name="email" />
                    </p>
                    <br/>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" />
                    </p>
                    <br/>
                    <p>
                        <label>Date of Birth</label><br/>
                        <input type="date" name="date" />
                    </p>
                    <br/>
                    <label htmlFor="genderSelect">Gender</label><br/>
                    
                    <select id="genderSelect" >
                    <option value="do not want to specify">Do not want to specify</option>
                    <option value="male">Male</option> 
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select><br/><br/>
                    <button  id="submit_btn" type="submit" >
                        Edit
                    </button>
                </form>
                <div> 
            <Link to="/home">
            <button className="primary-button">Homepage</button>
            </Link>

            <Link to="/">
                <button className="primary-button" onClick={handleClick}>Log out</button>
            </Link>

                </div>
        </div>
    )
}
