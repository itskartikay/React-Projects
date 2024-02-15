import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import "./css/hero.css";

const Hero = () => {
  const currValue=0;
  return (
    <>
        <div className='outer-shell'>
            <Dropdown/>
            <h1>{currValue}</h1>

        </div>
    </>
  );
};

export default Hero;
