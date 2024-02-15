import React from 'react';

import "./CSS/box.css"

const Box = (props) => {
    const handleClick = () => {
      window.location.href=props.link;
    }
    
    return (
    <>
        <div className='project-card'>

            <img className="img" src={props.image} />

            <h2 className='font3'>
                {props.title}
            </h2>

            <h3 className="font5 link">
                <a href="https://`{props.link}`">
                    {props.link}
                </a>
            </h3>

            <p className='font5'>
                {props.content}
            </p>
        </div>

    </>
  )
}

export default Box
