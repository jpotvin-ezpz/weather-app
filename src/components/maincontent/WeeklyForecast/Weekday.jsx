/* eslint-disable no-self-assign */
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

const Weekday = ({todaysWeather, time, i, isCelsius}) => {
  let minTemp = todaysWeather.min_temp
  let maxTemp = todaysWeather.max_temp;
  let units = 'C'
  if (!isCelsius) {
    minTemp = minTemp * (9/5) + 32;
    maxTemp = maxTemp * (9/5) + 32;
    units = 'F';
  }
  
  let min = Math.floor(minTemp);
  let max = Math.ceil(maxTemp); 

  let todaysDateTime = new Date(time)
  todaysDateTime.setDate(new Date(time).getDate()+i)

  function getDayOfWeek(date) {
    let dayOfWeek = new Date(date).getDay();
    dayOfWeek > 6 ? dayOfWeek-=7 : dayOfWeek=dayOfWeek;    
    return isNaN(dayOfWeek) ? null : 
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
  }
  
  let todaysDay = getDayOfWeek(todaysDateTime);
  let todaysDate = todaysDateTime.getDate();
  let todaysMonth = todaysDateTime.toLocaleString('default', {month: 'short'});
  let dayTitle = `${todaysDay}, ${todaysDate} ${todaysMonth}`
  if (i === 1)  dayTitle = 'Tomorrow';

  let weatherState;
  let weatherStateDesc;
  switch(todaysWeather.weather_state_abbr) {
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
    <div className='weekday'>
      <h2 className='weekday-header'>{dayTitle}</h2>
      <img className='weekday-img' src={weatherState} alt={weatherStateDesc}/>
      <div className='hi-low'>
        <p className='daily-hi' >{max}&deg;{units}</p>
        <p className='daily-lo' >{min}&deg;{units}</p>
      </div>
    </div>
   );
}
 
export default Weekday;