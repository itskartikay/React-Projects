import React, {useState} from 'react';
import {Link} from 'react-scroll';

import "./CSS/navbar.css";

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
              <li className='font3'>
                <Link to='about' smooth={true} duration={10}>
                  About
                </Link></li>
              <li className='font3'>
                <Link to='projects' smooth={true} duration={10}>
                  Projects
                </Link></li>
              <li className='font3'>
                <Link to='skills' smooth={true} duration={10}>
                  Skills
                </Link></li>
              <li className='font3'>
                <Link to='contact'smooth={true} duration={10} >
                  Contact
                </Link></li>
          </ul>
        </div>
    </>
  )
}

export default Navbar;
