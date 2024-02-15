import React from 'react'
import "./CSS/hero.css"

import Dp from "../assets/profile_pic.jpg"

const Hero = () => {
  return (
    <>
        <div className='hero-main'>
            <div className='profile-photo'>
                <img className="photo" src={Dp}/>
            </div>

            <div className='hero-text'>
                <h1 className='hero-text-inside font1'>Hello, I'm <span className='name'>Kartikay Sharma</span></h1>
                <h2 className='hero-text-inside font2'>Web Developer from India</h2>
            </div>
        </div>
    </>
  )
}

export default Hero;
