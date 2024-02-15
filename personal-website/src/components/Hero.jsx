import React from 'react'
import "./CSS/hero.css"

import Dp from "../assets/profile_pic.jpg";
import cv from "../assets/Kartikay_Sharma.pdf";

const Hero = () => {
  return (
    <>
        <div className='hero-main'>
            <div className='profile-photo'>
                <img className="photo" src={Dp}/>
            </div>

            <div className='hero-text'>
                <h1 className='hero-text-inside font1'>Hello, I'm <span className='gradient'>Kartikay Sharma,</span></h1>
                <h2 className='hero-text-inside font2'>Full Stack Web Developer, UI/UX Developer</h2>
            </div>

            <div className='resume font4 gradient'>
              <a href={cv} target='_blank'>
                Resume
              </a>
            </div>
        </div>
    </>
  )
}

export default Hero;
