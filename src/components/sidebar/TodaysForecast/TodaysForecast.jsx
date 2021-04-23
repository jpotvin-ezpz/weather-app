import React from 'react';
import LocationName from './LocationName';
import TodaysDesc from './TodaysDesc';
import TodaysTemp from './TodaysTemp';
import TodaysTime from './TodaysTime';
import TodaysType from './TodaysType';
import BgClouds from '../../../pics/Cloud-background.png'

const TodaysForecast = ({weather, isCelsius}) => {
  return ( 
    <div className='todays-forecast'>
      <img className='clouds-background' src={BgClouds} alt=''/>
      <TodaysType weather={weather.consolidated_weather[0]}/>
      <TodaysTemp weather={weather.consolidated_weather[0]} isCelsius={isCelsius}/>
      <TodaysDesc weather={weather.consolidated_weather[0]}/>
      <TodaysTime time={weather.time}/>
      <LocationName name={weather.title}/>
    </div>
   );
}
 
export default TodaysForecast;