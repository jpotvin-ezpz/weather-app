import React from 'react';
import Clear from '../../../pics/Clear.png';
import Hail from '../../../pics/Hail.png';
import HeavyCloud from '../../../pics/HeavyCloud.png';
import HeavyRain from '../../../pics/HeavyRain.png';
import LightCloud from '../../../pics/LightCloud.png';
import LightRain from '../../../pics/LightRain.png';
import Shower from '../../../pics/Shower.png';
import Sleet from '../../../pics/Sleet.png';
import Snow from '../../../pics/Snow.png';
import Thunderstorm from '../../../pics/Thunderstorm.png';

const TodaysType = ({weather}) => {
  let weatherState;
  let weatherStateDesc;
  switch(weather.weather_state_abbr) {
    case 'sn':
    weatherState = Snow;
    weatherStateDesc = 'Snow';
    break;
    case 'sl':
    weatherState = Sleet;
    weatherStateDesc = 'Sleet';
    break;
    case 'h':
    weatherState = Hail;
    weatherStateDesc = 'Hail';
    break;
    case 't':
    weatherState = Thunderstorm;
    weatherStateDesc = 'Thunderstorm';
    break;
    case 'hr':
    weatherState = HeavyRain;
    weatherStateDesc = 'Heavy Rain';
    break;
    case 'lr':
    weatherState = LightRain;
    weatherStateDesc = 'Light Rain';
    break;
    case 's':
    weatherState = Shower;
    weatherStateDesc = 'Showers';
    break;
    case 'hc':
    weatherState = HeavyCloud;
    weatherStateDesc = 'Heavy Cloud Coverage';
    break;
    case 'lc':
    weatherState = LightCloud;
    weatherStateDesc = 'Light Cloud Coverage';
    break;
    default: 
    weatherState = Clear;
    weatherStateDesc = 'Clear Skies';
  }
  return ( 
    <img 
      className='todays-type'
      src={weatherState}
      alt={weatherStateDesc}
    />
   );
}
 
export default TodaysType;