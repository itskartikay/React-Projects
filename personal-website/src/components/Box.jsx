import React from 'react';

import "./CSS/box.css"

const Box = (props) => {    
    return (
    <>
        <div className='project-card'>

            <img className="img" src={props.image} />

            <h2 className='font3'>
                {props.title}
            </h2>

            <h3 className="font5 link">
                Deployed Project -
                <a href={"https://"+props.link} target="_blank">
                    {" "+props.link}
                </a>
            </h3>

            <h3 className="font5 link">
                GitHub Repository -
                <a href={"https://"+props.link} target="_blank">
                    {" "+props.github}
                </a>
            </h3>

            <p className='font5'>
                {props.content}
            </p>
        </div>

    </>
  )
}

export default Box;
