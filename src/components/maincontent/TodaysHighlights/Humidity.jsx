import React from 'react';

const Humidity = ({humidity}) => {
  return ( 
    <div className='highlight humidity'>
      <h2>Humidity</h2>
      <p className='humidity-percent'>
        {humidity}
        <span className='unit'>
          %
        </span>
      </p>
      <div className='progress-bar--wrapper'>
        <div className='markers'>
          <span className='marker'>0</span>
          <span className='marker'>50</span>
          <span className='marker'>100</span>
        </div>
        <div className='progress-bar'>
          <span className='progress' style={{width: humidity + '%'}}></span>
        </div>
        <span className='lone-percent'>%</span>
      </div>
    </div>
   );
}
 
export default Humidity;