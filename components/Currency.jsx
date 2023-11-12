import React, { useState, useEffect } from 'react';


const API_URL ='https://v6.exchangerate-api.com/v6/5d97937eb5df07aee57d3f77/latest/UYU';

const Currency = () => {
  
  const [data,SetData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        SetData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
 
  if (data) {
    return (
      <div className="currency">
        <ul>
            <li key={'USD'} className='currency-rates'> 
                <strong>USD</strong>
                <p>{`${(1/data.conversion_rates.USD).toFixed(2)}`}</p>
            </li>
            <li key={'EUR'} className='currency-rates'> 
              <strong>EUR</strong>
              <p>{`${(1/data.conversion_rates.EUR.toFixed(2))}`}</p>
            </li>
            <li key={'ARS'} className='currency-rates'> 
              <strong>ARS</strong>
              <p>{`${(1/data.conversion_rates.ARS).toFixed(2)}`}</p>
            </li>
            <li key={'BRL'} className='currency-rates'> 
              <strong>BRL</strong>
              <p>{`${(1/data.conversion_rates.BRL).toFixed(2)}`}</p>
            </li>
        </ul>
      </div>
    );
  } else {
    return <p id='loading-currencies'>Loading Currencies...</p>;
  }
};

export default Currency ;


