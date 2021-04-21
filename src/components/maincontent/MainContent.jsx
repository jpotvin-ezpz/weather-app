import React from 'react';
import WeeklyForecast from './WeeklyForecast/WeeklyForecast';
import UnitToggle from './UnitToggle';
import TodaysHighlights from './TodaysHighlights/TodaysHighlights';

const MainContent = ({weather, isCelsius, handleToggleUnits}) => {
  return ( 
    <div className='main-content'>
      <UnitToggle  handleToggleUnits={handleToggleUnits}/>
      <WeeklyForecast weather={weather} isCelsius={isCelsius}/>
      <TodaysHighlights weather={weather.consolidated_weather} />
    </div>
   );
}
 
export default MainContent;