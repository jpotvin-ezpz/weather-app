import React from 'react';

const AirPressure = ({airPressure}) => {
  return ( 
    <div className='highlight air'>
      <h2>Air Pressure</h2>
      <p className='air-pressure'>
        {Math.round(airPressure)}
         <span className='unit'>
         &nbsp;mb
         </span>
      </p>
    </div>
   );
}
 
export default AirPressure;