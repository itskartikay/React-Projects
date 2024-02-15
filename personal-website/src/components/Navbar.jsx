import React, {useState} from 'react'
import "./CSS/navbar.css"

const Navbar = () => {

  const [color, setColor]= useState(false);

  const scrolling = () =>{
    if(window.scrollY>=100){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', scrolling)
  return (
    <>
        <div className={color ? "nav nav-bg" : "nav"}>
          <ul className='nav-list'>
              <li className='font3'>About</li>
              <li className='font3'>Projects</li>
              <li className='font3'>Skills</li>
              <li className='font3'>Contact</li>
          </ul>
        </div>
    </>
  )
}

export default Navbar;
