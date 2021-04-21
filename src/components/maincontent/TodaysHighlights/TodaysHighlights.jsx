import React from 'react';
import AirPressure from './AirPressure';
import Humidity from './Humidity';
import Visibility from './Visibility';
import Wind from './Wind';

const TodaysHighlights = ({weather}) => {
  let todaysWeather = weather[0];
  return ( 
    <div className='highlights'>
    <h1 className='highlights-header'>Today's Highlights</h1>
      <div className='highlights-wrapper'>
        <Wind 
          windSpeed={todaysWeather.wind_speed} 
          windDirection={todaysWeather.wind_direction_compass}
        />
        <Humidity humidity={todaysWeather.humidity} />
        <Visibility visibility={todaysWeather.visibility} />
        <AirPressure airPressure={todaysWeather.air_pressure} />
      </div>
    </div>
   );
}
 
export default TodaysHighlights;