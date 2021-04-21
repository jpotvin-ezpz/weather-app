import React from 'react';

function Wind ({windSpeed, windDirection}){
  let rotation;
  
  switch(windDirection) {
    case 'N':
    rotation = '0' ;
    break;
    case 'NNE':
    rotation = '22.5' ;
    break;
    case 'NE':
    rotation = '45' ;
    break;
    case 'ENE':
    rotation = '67.5' ;
    break;
    case 'E':
    rotation = '90' ;
    break;
    case 'ESE':
    rotation = '112.5' ;
    break;
    case 'SE':
    rotation = '135' ;
    break;
    case 'SSE':
    rotation = '157.5' ;
    break;
    case 'S':
    rotation = '180' ;
    break;
    case 'SSW':
    rotation = '202.5' ;
    break;
    case 'SW':
    rotation = '225' ;
    break;
    case 'WSW':
    rotation = '247.5' ;
    break;
    case 'W':
    rotation = '270' ;
    break;
    case 'WNW':
    rotation = '292.5' ;
    break;
    case 'NW':
    rotation = '315' ;
    break;
    case 'NNW':
    rotation = '337.5' ;
    break;
    default:
    rotation = '225';
  }

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
        <span className="material-icons" style={{transform: `rotate(${rotation}deg)`}} id='compass'>
          navigation
        </span>
        {windDirection}
      </div>
    </div>
   );
  }
 
export default Wind;