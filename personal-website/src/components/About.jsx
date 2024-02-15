import React from 'react';
import "./CSS/about.css"

import AboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <>

    <div className='about-main'>

        <div className='about-container'>

            <div>
                <img src={AboutImage} className='about-img'/>
            </div>
            
            <div className='about-text'>
                <h2 className='font2 about-heading gradient'>
                    About
                </h2>
                <p className='font4 about-para'>
                    Motivated 4th year Computer Science Engineering student with passion for Front-End Web Development.
                    Eager to leverage academic knowledge and skills to create exceptional user experiences while maintaining the highest standards.
                </p>
            </div>

        </div>
    </div>

    </>
  )
}

export default About;
