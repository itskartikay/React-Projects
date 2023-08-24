import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [myGIF, setMyGIF] = useState();

  const selectedValue = (event) => {
    setNum(event.target.value)
  }

  useEffect(()=>{
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      console.log(res.data)
      setName(res.data.name)
      setMoves(res.data.moves.length)

    }

    async function getGIF(){
      const res2 = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=TkKOpqIW3ovFQUQaTVH6bfBEQKbQ8cJg&q=${name}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      console.log(res2.data)
      
      setMyGIF(res2.data.data[0].images.original.url)
    }

    getData();
    getGIF();
  })

  const options = Array.from({ length: 1281 }, (_, index) => index + 1);

  return (
    <>

      <h1>Pokemon Selector</h1>

      <h2>You Chose {name}</h2>
      <p>
        {name} has {moves} moves
      </p>
      <h3>
        Select Your Pokemon By Card Number : 
        <span>
          <select value={num} onChange={selectedValue}>
            {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))};
          </select>
        </span>
      </h3>

      <br/>
      <img src={myGIF} alt='GIF' />
    </>
  );
};

export default App
