import React from 'react';
import "./CSS/skillbox.css";

const SkillBox = ({skills}) => {
  return (
    <>
      <div className="skillsbox-main">

        {skills.map((skill, index) => (
          <div key={index} className="skills-card">
            <img className="skills-img" src={skill.image}/>
            <h3 className='font3 skills-title'>{skill.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default SkillBox
