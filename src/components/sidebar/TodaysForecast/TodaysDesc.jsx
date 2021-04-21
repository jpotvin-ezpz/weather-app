import React from 'react';

const TodaysDesc = ({weather}) => {
  let weatherDesc;

  switch(weather.weather_state_abbr) {
    case 'sn':
    weatherDesc = 'Snowing';
    break;
    case 'sl':
    weatherDesc = 'Sleeting';
    break;
    case 'h':
    weatherDesc = 'Hailing';
    break;
    case 't':
    weatherDesc = 'Thunderstorms';
    break;
    case 'hr':
    weatherDesc = 'Heavy Rain';
    break;
    case 'lr':
    weatherDesc = 'Light Rain';
    break;
    case 's':
    weatherDesc = 'Showers';
    break;
    case 'hc':
    weatherDesc = 'Mostly Cloudy';
    break;
    case 'lc':
    weatherDesc = 'Lightly Cloudy';
    break;
    default:
    weatherDesc = 'Clear Skies'
  }

  return ( 
  <p className='todays-desc'>
    {weatherDesc}
  </p> );
}
 
export default TodaysDesc;