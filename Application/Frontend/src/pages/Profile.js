import React, { useEffect,useReducer } from 'react'
import { Link } from 'react-router-dom'
import logout from "../services/Logout_API";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import MessageBox from "../components/MessageBox";
import edit from "../services/Edit_API";
import editProfile from '../services/EditProfile_API';
import { ToggleSlider }  from "react-toggle-slider";
import Select from 'react-select';

export default function Profile() {

    let history = useHistory()

    const [isLoggedout, setLoggedout] = useState(false)
    const [isDoctor, setIsDoctor] = useState(false);
    const initialErrorState = {
        username: "", 
        email: "", 
        password: "", 
        date: ""
    }


    const [errors, setErrors] = useState(initialErrorState)
    const [isSuccessfull, setSuccessfull] = useState(false)

    const clearErrorState = () => {
        setErrors({...initialErrorState})
    }

    
    const [profileInformation, setprofileInformation] = useState({
        username: "",
        email: "",
        name: "",
        surname: "",
        gender: "",
        birth: "",
        phone:"",
        diploma:"",
        profession:"",
        doctor:""

      });

    const [profileData, setprofileData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        []
    );

    useEffect( ()=>   {
        edit().then(res=> {
           
            setprofileInformation({
                username: res["username"],
                email: res["email"],
                name: res["first_name"],
                surname: res["last_name"],
                gender: res["gender"],
                birth: res["birth_date"],
                phone: res["phone_number"],
                diploma:res["diplomaID"],
                profession: res["profession"],
                doctor: res[ "verified_as_doctor"]
                
              })
              setIsDoctor(res[ "verified_as_doctor"]);

        })
    }, []);


    const handleEdit = event => {
        event.preventDefault();
        editProfile(profileData).then(
            res => {
                clearErrorState()
                if(res===null){
                    setSuccessfull(true)
                }else {
                    const jsonString = JSON.parse(res.replaceAll("'", "\""))
                    var newErrors = {}
                    for (const key of Object.keys(jsonString)){
                        newErrors[key] = jsonString[key][0]
                    }
                    setErrors({...newErrors})
                }
            }
        )
       
}
    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setprofileData({ [name]: value });
        //console.log(profileData)
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
            <Link to="/home">
            <button className="primary-button" style = {{position: "absolute", top: "5px", right: "200px"}}>Homepage</button>
            </Link>

            <Link to="/">
                <button className="primary-button"style = {{position: "absolute", top: "5px", right: "5px"}} onClick={handleClick}>Log out</button>
            </Link>
            <h1 className="profile-title home-page-title">Your Profile</h1>
            
            <div> {isLoggedout && <MessageBox data="Logout Successful!" style={{ color: "#222", fontSize: "2.5rem", textTransform: "capitalize" }}> </MessageBox>}
            </div>
            <div> {isSuccessfull && <MessageBox data = "Your changes have been successfully saved." style = {{color: "#222", fontSize: "2.5rem", textTransform: "capitalize"}}> </MessageBox>}
              </div>
              

              <div > 

              <form >
            <div>
                        <label>Username</label><br/>
                        <input defaultValue={profileInformation.username}  type="text" name="username" readOnly={true} />
                    </div>
                    <br/>
                    <div>
                        <label>Name</label><br/>
                        <input defaultValue={profileInformation.name} onChange={handleChange} type="text" name="first_name" />
                    </div>
                    <br/>
                    <div>
                        <label>Surname</label><br/>
                        <input defaultValue={profileInformation.surname} onChange={handleChange}  type="text" name="last_name" />
                    </div>
                    <br/>
                    <div>
                        <label>Email address</label><br/>
                        <input defaultValue={profileInformation.email} onChange={handleChange} type="email" name="email"  />
                    </div>
                    <br/>
                   
                    <div>
                        <label>Phone Number</label><br/>
                        <input defaultValue={profileInformation.phone} onChange={handleChange}  type="" name="phone_number" />
                    </div>
                    <br/>
                    
                   
                    
                    <div>
                        <label>Birthday</label><br/>
                        <input defaultValue={profileInformation.birth} onChange={handleChange}  type="date" name="date" />
                    </div>
                    <br/>
                    <div>
                    <label htmlFor="genderSelect">Gender</label><br/>
                    
                    <select id="genderSelect"  onChange = {handleChange} name ="gender">
                    <option value="do not want to specify" selected = {profileInformation.gender === 'D'}>Do not want to specify</option>
                    <option value="male" selected = {profileInformation.gender === 'M'}>Male</option> 
                    <option value="female" selected = {profileInformation.gender === 'F'}>Female</option>
                    <option value="other" selected = {profileInformation.gender === 'O'}>Other</option>
                    </select>

                    <br/><br/>
                    </div>
                    
                    <button  id="submit_btn" type="submit" onClick={handleEdit}>
                        Edit
                    </button>
                </form>
                
               

                <form>

                <div>
                    <h4>Are you a doctor?</h4>
                    <h6>
                    Please provide your diploma ID and profession, 

                    </h6>
                    <h6>after checking your data your verification will be completed.</h6>
                    <br/>
                        <label>Diploma ID</label>
                        <input defaultValue={profileInformation.diploma} onChange={handleChange}  type="text" name="diplomaID" />
                    </div>
                    <br/>

                    <div>
                        <label>Profession</label>
                        <input  defaultValue={profileInformation.profession} onChange={handleChange}  type="text" name="profession" />
                    </div>
                    <br/>
                    <div>
                    {
                        isDoctor ? <div>
                                 <h6 >Your verification is completed.</h6>
                            
                            </div> 
                            : 
                            <div>
                                <h6>Your verification is not completed.</h6>
                        </div>
                        }



                    </div>


                </form>


              </div>
           
               
        </div>
    )
}
