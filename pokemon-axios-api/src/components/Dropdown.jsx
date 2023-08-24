import React from 'react';

const Dropdown = ({ value, onChange, options }) => {
  return (
    <>
    <h2 className='heading2'>
        Select Your Pokemon By Card Number
    </h2>
        
    <select className='menu' value={value} onChange={onChange}>
        {options.map((option) => (
            <option key={option} value={option}>
            {option}
            </option>
        
        ))}
    </select>
    
    </>
  );
};

export default Dropdown;
