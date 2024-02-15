import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = (currencyCode) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const [inputValue, setInputValue] = useState('');

  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  const [selectedSecondOption, setSelectedSecondOption] = useState('');

  useEffect(() => {
    axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_vGimKaVPNsGJOT0jzkbmfm02FctzgbkLXOqjCeIb')
      .then(response => {
        const currencies = response.data.data;

        setOptions(Object.keys(currencies));
        setSecondDropdownOptions(Object.keys(currencies));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };



  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log('Input Value:', inputValue);

  };

  const handleSecondSelectChange = (event) => {
    setSelectedSecondOption(event.target.value);
  };

  return (
    <div>

      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select</option>
        {options.map(currencyCode => (
          <option key={currencyCode} value={currencyCode}>
            {currencyCode}
          </option>
        ))}
      </select>

      <input type='text' name='base' placeholder='Enter a value' value={inputValue} onChange={handleInputChange}/>

      <select value={selectedSecondOption} onChange={handleSecondSelectChange}>
        <option value="">Select</option>
        {secondDropdownOptions.map(currencyCode => (
          <option key={currencyCode} value={currencyCode}>
            {currencyCode}
          </option>
        ))}
      </select>

      <button>
        Convert
      </button>

    </div>
  );
};

export default Dropdown;
