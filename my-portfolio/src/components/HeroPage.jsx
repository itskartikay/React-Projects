import React from "react";
import NavBar from "./NavBar.jsx"

import "./CSS/global.css";
import "./CSS/HeroPage.css";

import ProfilePic from "../assets/profile-pic.jpg";
// import arrow from "../assets/arrow.png";

const HeroPage = () => {

    return (

        <>
            {/* <img src={arrow} className="arrow"></img> */}

            <NavBar/>
            
            <div className="center-div">

                <img className="profile-pic" src={ProfilePic}></img>

                <div className="text-div">
                    <p className="normal-text">Hi, I'm</p>
                    <h1 className="heading">Kartikay Sharma</h1>
                    <h2 className="sub-heading">Web Developer</h2>

                    <div className="button-div">

                        <div className="LinkedIn text1">
                            LinkedIn
                        </div>

                        <div className="GitHub text2">
                            GitHub
                        </div>

                    </div>

                </div>

            </div>
        </>

    )

}

export default HeroPage;