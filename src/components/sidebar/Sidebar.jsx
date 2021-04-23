import React from 'react';
import LocationSearch from './LocationSearch/LocationSearch';
import SearchForm from './LocationSearch/SearchForm';
import TodaysForecast from './TodaysForecast/TodaysForecast';

const Sidebar = ({weather, isCelsius, fetchLocal, handleSetNewCity, setIsSearching, isSearching}) => {


  return ( 
    <div className='sidebar'>
      {isSearching && <SearchForm handleSetNewCity={handleSetNewCity} setIsSearching={setIsSearching}/>}
      <LocationSearch fetchLocal={fetchLocal} setIsSearching={setIsSearching}/>
      <TodaysForecast weather={weather} isCelsius={isCelsius}/>
    </div>
   );
}
 
export default Sidebar;