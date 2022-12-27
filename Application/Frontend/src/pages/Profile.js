import React, { useEffect,useReducer } from 'react'
import { Link } from 'react-router-dom'
import logout from "../services/Logout_API";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import MessageBox from "../components/MessageBox";
import edit from "../services/Edit_API";
import editProfile from '../services/EditProfile_API';
import '../App.css'
import Form from 'react-bootstrap/Form'
import styles from "./home.module.css";
import delete_account from '../services/Delete_User_API';

export default function Profile() {

    let history = useHistory()

    const [isLoggedout, setLoggedout] = useState(false)
    const [isDeleted, setDeleted] = useState(false)
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

    function handleDelete(event) {
        event.preventDefault()
        if(window.confirm("Are you sure you want to delete your account?")){
            delete_account().then(res => {
                if (res === null) {
                    setDeleted(true)
                    setTimeout(() => {
                        history.push('/');
                    }, "1500")
                }
            })
        }

      }
    
    return (
        
        <div className="center" >
            <div class="buttons">
            <Link to="/home">
                <button className={styles.mybutton} id="custom_button" size="lg" >Homepage</button>
            </Link>

            <Link to="/">
                <button className={styles.mybutton} id="custom_button" size="lg" style = {{position: "absolute", top: "20px", right: "5px"}} onClick={handleClick}>Log out</button>
            </Link>

            </div>

            <header style={HeaderStyle}>

                <h1 class="main-title text-center"  style={{ color: "#0f7375", fontSize: "3rem", textTransform: "capitalize" }}>Your Profile</h1>
            
            
                <div> {isLoggedout && <MessageBox data="Logout Successful!" style={{ color: "#c2cd23", fontSize: "2.5rem", textTransform: "capitalize" }}> </MessageBox>}</div>
                <div> {isSuccessfull && <MessageBox data = "Your changes have been successfully saved." style={{color: "#c2cd23", fontSize: "2rem"}}> </MessageBox>}</div>
                <div> {isDeleted && <MessageBox data = "Your account has been successfully deleted." style={{color: "#c2cd23", fontSize: "2rem"}}> </MessageBox>}</div>
                <div  style={{ display: "flex" }}>

                    <Form  style = {formStyle} >
                        <div >
                            <label style = {labelStyle}>Username</label><br/>
                            <input defaultValue={profileInformation.username} style={inputStyle}  type="text" name="username" readOnly={true} />
                        </div>
                        <br/>
                        <div>
                            <label style = {labelStyle} >Name</label><br/>
                            <input defaultValue={profileInformation.name} onChange={handleChange} style={inputStyle}  type="text" name="first_name" />
                        </div>
                        <br/>
                        <div>
                            <label style = {labelStyle}>Surname</label><br/>
                            <input defaultValue={profileInformation.surname} onChange={handleChange} style={inputStyle}  type="text" name="last_name" />
                        </div>
                        <br/>
                        <div>
                            <label style = {labelStyle}>Email address</label><br/>
                            <input defaultValue={profileInformation.email} onChange={handleChange} style={inputStyle}  type="email" name="email"  />
                        </div>
                        <br/>
                   
                        <div>
                            <label style = {labelStyle}>Phone Number</label><br/>
                            <input defaultValue={profileInformation.phone} onChange={handleChange} style={inputStyle}  type="" name="phone_number" />
                        </div>
                        <br/>
                    
                        <div>
                            <label style = {labelStyle}>Birthday</label><br/>
                            <input defaultValue={profileInformation.birth} onChange={handleChange} style={inputStyle}   type="date" name="date" />
                        </div>
                        <br/>
                        <div>
                            <label style = {labelStyle} htmlFor="genderSelect">Gender</label><br/>
                            <select id="genderSelect"  onChange = {handleChange} style={inputStyle} name ="gender">
                                <option value="do not want to specify" selected = {profileInformation.gender === 'D'}>Do not want to specify</option>
                                <option value="male" selected = {profileInformation.gender === 'M'}>Male</option> 
                                <option value="female" selected = {profileInformation.gender === 'F'}>Female</option>
                                <option value="other" selected = {profileInformation.gender === 'O'}>Other</option>
                            </select>
                            <br/><br/>
                        </div>
                    
                        <button variant="success" style={editButton} id="custom_button" size="lg"   type="submit" onClick={handleEdit}> Edit </button>
                    </Form>
                
                    <Form  style = {doctorFormStyle}>

                        <div>
                            <h4 style={{color: "#0f7375"}}>Are you a doctor? 🩺</h4>
                            <br/>
                            <h6 style={{color: "#0f7375"}}> Please provide your diploma ID and profession, </h6>
                            <h6 style={{color: "#0f7375"}}>after checking your data your verification will be completed.</h6>
                            <br/>
                            <label style = {labelStyle}>Diploma ID</label>
                            <input defaultValue={profileInformation.diploma} onChange={handleChange} style={inputStyle}  type="text" name="diplomaID" />
                        </div>
                        <br/>

                        <div>
                            <label style = {labelStyle}>Profession</label>
                            <input  defaultValue={profileInformation.profession} onChange={handleChange} style={inputStyle}  type="text" name="profession" />
                        </div>
                        <br/>
                        <div>
                            {isDoctor ? 
                                <div><h6 style={{color:"green"}}>Your verification is completed.</h6></div> 
                                : 
                                <div><h6 style={{color:"red"}}>Your verification is not completed.</h6></div>
                            }
                        </div>
                        <button variant="success" style={deleteButtonStyle} id="custom_button" size="lg" onClick={handleDelete}> Delete Account </button>
                    </Form>
                    <br/>
                </div>
                
            </header>
        </div>
    )
}
const HeaderStyle = {
    backgroundColor: "#7ab3b7",
    width: "100%",
    height: "100vh",
    "overflowY": "hidden",
    "overflowX": "hidden",
}

const formStyle = {
    marginTop: -5,
    marginLeft: 100,
    marginBottom: 400,
    backgroundColor: "#dde296",
    width: "25%",
    heigth: "40%",
    borderWidth:"2px", 
    borderStyle: "solid",
    borderRadius:"5px"
}
const doctorFormStyle = {
    marginTop: 5,
    marginLeft:300,
    marginRight: 100,
    marginBottom: 600,
    backgroundColor: "#dde296",
    width: "30%",
    heigth: "10%",
    borderWidth:"2px", 
    borderStyle: "solid",
    borderRadius:"5px"
}

const labelStyle = {
    marginTop: 0,
    marginLeft: -1,
    fontWeight:"bold", 
    fontSize: 15,
    paddingLeft : "1%",

    color: "#0f7375"
}

const inputStyle = {
    backgroundColor:"lightgoldenrodyellow",
    width: "90%",
    marginRight:50,
    marginLeft:10
}

const editButton ={
    width: "7rem",
    background: "#0f7375",
    border: "none",
    color: "#dde296",
    fontSize: "1.2rem",
    borderRadius: "5px",
}

const deleteButtonStyle = {
    width: "20rem",
    height: "10%",
    background: "#e72323",
    border: "none",
    color: "#dde296",
    fontSize: "1.2rem",
    borderRadius: "5px",
    position: "absolute",
    marginLeft: "-10rem",
    marginTop: "8rem"
}