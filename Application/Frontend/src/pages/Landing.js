import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../App.css'
import Logo from '../assets/MediShare.png'
import DoctorSign from '../assets/sign.svg'
import Stethoscope from '../assets/stethoscope.svg'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'



export default function Landing() {

    const [index, setIndex] = useState(1);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval="300000" data-interval="300000">
          
                <header style={ HeaderStyle }>
                    <div className="center">
                        <h1 class="main-title text-center">Register to MediShare</h1>
                        <p class="main-para text-center">Create your personal account</p>
                        <RegisterForm>
                        </RegisterForm>
                        <Button variant="success" class="primary-button" id="custom_button" size="lg" onClick={() => {setIndex(1)}}> <span> Back to Landing Page </span> </Button>
                        <br/>
                        <Image src={Logo} style={{marginTop:-3}}></Image>
                    </div>
                </header>
        
            </Carousel.Item>

          <Carousel.Item interval="300000" data-interval="300000">
            <header style={ HeaderStyle }>
                <div class="wrap">

                    <div class="fleft">
                        <Image src={DoctorSign} style={{ width: 500 , height: 1000, marginLeft:100}}></Image>
                    </div>
                    
                    <div class="fmid">
                    
                        <div class = "center">
                            <h1 class="main-title text-center">Welcome to MediShare</h1>
                            <br/>
                            <p class="main-para text-center">Please Register or Login</p>
                            <br/> <br/> <br/> <br/>
                            <div class="buttons text-center">
                                    <Button variant="success" class="primary-button" id="custom_button" size="lg" onClick={() => {setIndex(0)}} style={{marginRight: 20}}> <span> Register </span> </Button>
                                    <Button variant="success" class="primary-button" id="custom_button" size="lg" onClick={() => {setIndex(2)}}> <span> Log In </span> </Button>
                            </div>
                            <br/> <br/> <br/>
                            <div class="buttons text-center">
                                <Link to="/home">
                                <Button variant="success" class="primary-button" id="custom_button" size="lg"> <span> Continue as a Guest </span> </Button>
                                </Link>
                            </div>
                            
                            <Image src={Logo} style={{marginTop:100}}></Image>
                        </div>
                        
                    </div>
                    <div class="fright">
                        <Image src={Stethoscope} style={{ width: 450 , height: 1000, marginRight: 200}} ></Image>
                    </div>
        
                </div>

            </header>
          </Carousel.Item>

          <Carousel.Item interval="300000" data-interval="300000">
            <header style={ HeaderStyle }>
                <div class="center">
                    <h1 class="main-title text-center">Login to MediShare</h1>
                    <p class="main-para text-center">Please provide your credentials</p>
                    <LoginForm>
                    </LoginForm>
                    <Button variant="success" class="primary-button" id="custom_button" size="lg" style={{marginRight:60}} onClick={() => {setIndex(0)}}> <span> Create Account </span> </Button>
                    <br/><br/>
                    <Button variant="success" class="primary-button" id="custom_button" size="lg" onClick={() => {setIndex(1)}}> <span> Back to Landing Page </span> </Button>
                    <br/>
                    <Image src={Logo}></Image>
                </div>
            </header>

          </Carousel.Item>
        </Carousel>
      );

}

const HeaderStyle = {
    backgroundColor: "#011e36",
    width: "100%",
    height: "100vh",
    "overflowY": "hidden",
    "overflowX": "hidden",
}