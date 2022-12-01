import React, { useEffect,useReducer } from 'react'
import { Link } from 'react-router-dom'
import logout from "../services/Logout_API";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import MessageBox from "../components/MessageBox";
import edit from "../services/Edit_API";
import editProfile from '../services/EditProfile_API';
import { ToggleSlider }  from "react-toggle-slider";
export default function Profile() {

    let history = useHistory()

    const [isLoggedout, setLoggedout] = useState(false)
    const [active, setActive] = useState(false);

    const [profileInfo, setProfileInfo] = useState({
        username: "",
        email: "",
        name: "",
        surname: "",
        gender: "",
        birth: "",
        phone:"",
        diploma:"",
        doctor:"",
        profession:"",

      });

    const [profileInput, setProfileInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        []
    );

     useEffect( ()=>   {
        edit().then(res=> {
            setProfileInfo({
                username: res["username"],
                email: res["email"],
                name: res["first_name"],
                surname: res["last_name"],
                gender: res["gender"],
                birth: res["birth_date"],
                phone: res["phone_number"],
                diploma:res["diplomaID"],
                doctor: res[ "verified_as_doctor"],
                profession: res["profession"],
              });
            
        })
    });

    const handleEdit = event => {
        event.preventDefault();
        editProfile(profileInput).then(
            res => {
                if(res===null){
                    console.log(profileInput)
                    console.log("basarili");
                }
            }
        )
       
}
    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProfileInput({ [name]: value });
        //console.log(profileInput)
    };
    
    


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
                        <input defaultValue={profileInfo.name} onChange={handleChange} type="text" name="first_name" />
                    </p>
                    <br/>
                    <p>
                        <label>Surname</label><br/>
                        <input defaultValue={profileInfo.surname} onChange={handleChange}  type="text" name="last_name" />
                    </p>
                    <br/>
                    <p>
                        <label>Email address</label><br/>
                        <input defaultValue={profileInfo.email} onChange={handleChange} type="email" name="email"  />
                    </p>
                    <br/>
                   
                    <p>
                        <label>Phone Number</label><br/>
                        <input defaultValue={profileInfo.phone} onChange={handleChange}  type="" name="phone_number" />
                    </p>
                    <br/>
                    <p> 
                        <div>
                        <label>Verified as Doctor</label>
                        <ToggleSlider onToggle={state => setActive(state)}/> 
                        <br/>
                        </div>
                    </p>
                    
                    <br/>

                    <p>
                        <label>Diploma ID</label><br/>
                        <input defaultValue={profileInfo.diploma} onChange={handleChange}  type="text" name="diploma" />
                    </p>
                    <br/>

                    <p>
                        <label>Profession</label><br/>
                        <input  onChange={handleChange}  type="text" name="password" />
                    </p>
                    <br/>
                    
                    <p>
                        <label>Birthday</label><br/>
                        <input defaultValue={profileInfo.birth} onChange={handleChange}  type="date" name="birthday" />
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
