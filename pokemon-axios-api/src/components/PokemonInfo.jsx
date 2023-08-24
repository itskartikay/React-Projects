import React from 'react';

const PokemonInfo = ({ name, moves, gif }) => {
  return (
    <>
      <h3 className='heading3'>You Chose {name}</h3>
      <p className='para'>
        {name} has {moves} moves
      </p>
      <img className="img" src={gif} alt={name} />
    </>
  );
};

export default PokemonInfo;
