import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dropdown from './components/Dropdown';
import PokemonInfo from './components/PokemonInfo';
import "./CSS/App.css"
import "./CSS/App2.css"

const App = () => {

  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [myGIF, setMyGIF] = useState();
  const options = Array.from({ length: 1281 }, (_, index) => index + 1);

  const selectedValue = (event) => {
    setNum(event.target.value)
  }

  useEffect(()=>{
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      //console.log(res.data)
      setName(res.data.name)
      setMoves(res.data.moves.length)

    }

    async function getGIF(){
      const res2 = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=TkKOpqIW3ovFQUQaTVH6bfBEQKbQ8cJg&q=${name}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      //console.log(res2.data)
      
      setMyGIF(res2.data.data[0].images.original.url)
    }

    getData();
    getGIF();
  },[num,name])


  return (
    <>

      <h1 className='heading1'>Pokemon Selector</h1>
      <div className='main-div'>
        <Dropdown value={num} onChange={selectedValue} options={options} />
        <PokemonInfo name={name} moves={moves} gif={myGIF} />
      </div>

    </>
  );
};

export default App
