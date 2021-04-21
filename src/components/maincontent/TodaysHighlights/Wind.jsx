import React from 'react';



function Wind ({windSpeed, windDirection}){
  return ( 
    <div className='highlight wind'>
      <h2 className='wind-header'>Wind status</h2>
      <div className='wind-speed'>
        {Math.round(windSpeed)}
        <span className='unit'>
          mph
        </span>
      </div>
      <div className='wind-dir'>
        <span className="material-icons" id='compass'>
          navigation
        </span>
        {windDirection}
      </div>
    </div>
   );
  }
 
export default Wind;