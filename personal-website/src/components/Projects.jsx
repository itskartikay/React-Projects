import React from 'react';
import Box from './Box';

import pokemon from "../assets/pokemon-selector.png";
import pain from "../assets/painspeak.png";

import "./CSS/projects.css"

const Projects = () => {
  return (
    <>
      <div className='projects-main' id='projects'>
        
        <h1 className='font2 projects-heading gradient'>
          Projects
        </h1>
        <div className='project-section'>
          <Box
            image={pokemon}
            title="Pokemon Selector"
            link="pokemon-selector-gamma.vercel.app"
            github="github.com/itskartikay/Pokemon-Selector"
            content={[
              "• Developed an interactive web application 'Pokemon Selector' using React, Figma, and Axios.",<br/>,
              "• Implemented multiple API calls with Axios to retrieve comprehensive Pokémon data and GIFs from Giphy API.",<br/>,
              "• Utilized useState and useEffect hooks for efficient state management and handling side effects."
            ]}
          />
          <Box
            image={pain}
            title="PainSpeak – Universal Pain Translator"
            link="painspeak.vercel.app"
            github="github.com/itskartikay/PainSpeak"
            content={[
              "• Created 'PainSpeak' to serve as a universal pain translator, allowing patients to effectively communicate their pain to paramedics, transcending language and cultural barriers.",<br/>,
              "• Developed a custom local API to efficiently retrieve and manage the necessary data.",<br/>,
              "• Specially designed responsive UI for stress-free usage on Desktop, Tablet and Mobile."
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default Projects
