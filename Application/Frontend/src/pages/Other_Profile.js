import React, { useEffect} from 'react'
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import logout from "../services/Logout_API";
import { useParams } from 'react-router-dom';
import '../App.css'
import MessageBox from '../components/MessageBox';
import Form from 'react-bootstrap/Form'
import view_profile from '../services/Profile';

export default function Other_Profile() {

    let history = useHistory()

    const username = useParams()?.username

    const [isLoggedout, setLoggedout] = useState(false)

    const [profileInformation, setprofileInformation] = useState({
        username: "",
        email: "",
        name: "",
        surname: "",
        gender: "",
        birth: "",
        phone:"",
        profession:"",
        doctor:""
      });

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

    useEffect( ()=>   {
        view_profile(username).then(res=> {
           
            setprofileInformation({
                username: res["username"],
                email: res["email"],
                name: res["first_name"],
                surname: res["last_name"],
                gender: (res["gender"] === "D") ? "Do not want to specify" :
                (res["gender"] === "M") ? "Male" :
                (res["gender"] === "F") ? "Female" : "Other",
                birth: res["birth_date"],
                phone: res["phone_number"],
                profession: res["profession"],
                doctor: res[ "verified_as_doctor"]
              })
        })
    }, []);


    return (
        <div className="center" >
            <div class="buttons">
                <Link to="/home">
                    <button className={styles.mybutton} id="custom_button" size="lg" style = {{position: "absolute", top: "20px", right: "16rem"}}>Homepage</button>
                </Link>
                <Link to="/profile">
                    <button className={styles.mybutton} id="custom_button" size="lg" style = {{position: "absolute", top: "20px", right: "8rem"}}>Profile</button>
                </Link>

                <Link to="/">
                    <button className={styles.mybutton} id="custom_button" size="lg" style = {{position: "absolute", top: "20px", right: "5px"}} onClick={handleClick}>Log out</button>
                </Link>
            </div>
            
            <header style={HeaderStyle}>

                <h1 class="main-title text-center"  style={{ color: "#0f7375", fontSize: "3rem", textTransform: "capitalize" }}>Profile View</h1>

                <div> {isLoggedout && <MessageBox data="Logout Successful!" style={{ color: "#c2cd23", fontSize: "2.5rem", textTransform: "capitalize" }}> </MessageBox>}</div>

                <Form  style = {formStyle} >
                    <div >
                        <label style = {labelStyle}>Username</label><br/>
                        <input defaultValue={profileInformation.doctor ? profileInformation.username + " 🩺" : profileInformation.username} style={inputStyle}  type="text" name="username" readOnly={true} />
                    </div>
                    <br/>
                    <div>
                        <label style = {labelStyle} >Name</label><br/>
                        <input defaultValue={profileInformation.name} style={inputStyle}  type="text" name="first_name" readOnly={true} />
                    </div>
                    <br/>
                    <div>
                        <label style = {labelStyle}>Surname</label><br/>
                        <input defaultValue={profileInformation.surname} style={inputStyle}  type="text" name="last_name" readOnly={true} />
                    </div>
                    <br/>
                    <div>
                        <label style = {labelStyle}>Email address</label><br/>
                        <input defaultValue={profileInformation.email} style={inputStyle}  type="email" name="email" readOnly={true}/>
                    </div>
                    <br/>

                    <div>
                        <label style = {labelStyle}>Profession</label><br/>
                        <input defaultValue={profileInformation.profession} style={inputStyle}  type="text" name="email" readOnly={true}/>
                    </div>
                    <br/>
                
                    <div>
                        <label style = {labelStyle}>Phone Number</label><br/>
                        <input defaultValue={profileInformation.phone} style={inputStyle}  type="" name="phone_number" readOnly={true} />
                    </div>
                    <br/>
                
                    <div>
                        <label style = {labelStyle}>Birthday</label><br/>
                        <input defaultValue={profileInformation.birth}  style={inputStyle}   type="date" name="date" readOnly={true}/>
                    </div>
                    <br/>
                    <div>
                        <label style = {labelStyle}>Gender</label><br/>
                        <input defaultValue={profileInformation.gender} style={inputStyle}   type="text" name="gender" readOnly={true}/>
                        <br/><br/>
                    </div>
                </Form>
            
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
    backgroundColor: "#dde296",
    width: "25%",
    heigth: "40%",
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