import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logout from "../services/Logout_API";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import MessageBox from "../components/MessageBox";
import edit from "../services/Edit_API";
import editProfile from '../services/EditProfile_API';

export default function Profile() {

    let history = useHistory()

    const [isLoggedout, setLoggedout] = useState(false)

    const [profileInfo, setProfileInfo] = useState({
        username: "",
        email: "",
        name: "",
        surname: "",
        gender: "",
        birth: "",
        password: ""
      });

    function start() {
        edit().then(res=> {
            setProfileInfo({
                username: res["username"],
                email: res["email"],
                name: res["first_name"],
                surname: res["last_name"],
                gender: res["gender"],
                birth: res["birth_date"],
              });
            
        })
    };
    start();

    const handleEdit = event => {
        event.preventDefault();
        console.log(profileInfo)
        editProfile(profileInfo).then(
            res => {
                if(res===null){
                    console.log(profileInfo);
                    console.log("basarili");
                }
            }
        )
       
}
    

    function handleChange(event) {
        const {name, value} = event.target
        console.log(name)
        console.log(value)
        setProfileInfo(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        console.log(profileInfo)

    }
    
    


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
                        <input defaultValue={profileInfo.username} onChange={handleChange}  type="text" name="username" />
                    </p>
                    <br/>
                    <p>
                        <label>Name</label><br/>
                        <input defaultValue={profileInfo.name} onChange={handleChange} type="text" name="name" />
                    </p>
                    <br/>
                    <p>
                        <label>Surname</label><br/>
                        <input defaultValue={profileInfo.surname} onChange={handleChange}  type="text" name="surname" />
                    </p>
                    <br/>
                    <p>
                        <label>Email address</label><br/>
                        <input defaultValue={profileInfo.email} onChange={handleChange} type="email" name="email"  />
                    </p>
                    <br/>
                    <p>
                        <label>Password</label><br/>
                        <input defaultValue={profileInfo.password} onChange={handleChange}  type="password" name="password" />
                    </p>
                    <br/>
                    <p>
                        <label>Date of Birth</label><br/>
                        <input defaultValue={profileInfo.birth} onChange={handleChange}  type="date" name="date" />
                    </p>
                    <br/>
                    <label htmlFor="genderSelect">Gender</label><br/>
                    
                    <select id="genderSelect" >
                    <option value="do not want to specify">Do not want to specify</option>
                    <option value="male">Male</option> 
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select><br/><br/>
                    <button  id="submit_btn" type="submit" onClick={handleEdit}>
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
