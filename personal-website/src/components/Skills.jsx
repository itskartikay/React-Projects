import React from 'react';
import SkillBox from './SkillBox';

//css
import "./CSS/skills.css"

//logos
import rjs from "../assets/skills/reactjs.png";
import js from "../assets/skills/javascript.png";
import figma from "../assets/skills/figma.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import cpp from "../assets/skills/cpp.png";

const Skills = () => {

    const skillsData = [
        {title:"React", image:rjs},
        {title:"JavaScript", image:js},
        {title:"Figma", image:figma},
        {title:"HTML", image:html},
        {title:"CSS", image:css},
        {title:"C++", image:cpp}    
    ]

  return (
    <>
        <div className='skills-main'>
            
            <h1 className='font2 projects-heading gradient'>
                Skills
            </h1>
            <SkillBox skills={skillsData}/>

        </div>
    </>
  )
}

export default Skills;
