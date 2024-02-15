import React from 'react';
import "./components/CSS/fonts.css";


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';


const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </>
  )
}

export default App;
