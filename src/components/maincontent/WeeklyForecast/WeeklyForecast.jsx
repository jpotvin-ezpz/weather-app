import React from 'react';
import Weekday from './Weekday';

const WeeklyForecast = ({weather, isCelsius}) => {
  let weekWeather = {};
  weekWeather = weather.consolidated_weather;
  

  // console.log(getDayOfWeek(weather.time),',',todaysDate.getDate(), todaysDate.toLocaleString('default', {month: 'short'}))
  return ( 
    <div className='weekly-forecast'>
      <Weekday todaysWeather={weekWeather[1]} time={weather.time} isCelsius={isCelsius} i={1}/>
      <Weekday todaysWeather={weekWeather[2]} time={weather.time} isCelsius={isCelsius} i={2}/>
      <Weekday todaysWeather={weekWeather[3]} time={weather.time} isCelsius={isCelsius} i={3}/>
      <Weekday todaysWeather={weekWeather[4]} time={weather.time} isCelsius={isCelsius} i={4}/>
      <Weekday todaysWeather={weekWeather[5]} time={weather.time} isCelsius={isCelsius} i={5}/>
    </div>
   );
}
 
export default WeeklyForecast;