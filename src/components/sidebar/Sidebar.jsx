import React from 'react';
import LocationSearch from './LocationSearch/LocationSearch';
import SearchForm from './LocationSearch/SearchForm';
import TodaysForecast from './TodaysForecast/TodaysForecast';

const Sidebar = ({weather, isCelsius}) => {
  return ( 
    <div className='sidebar'>
      <SearchForm />
      <LocationSearch />
      <TodaysForecast weather={weather} isCelsius={isCelsius}/>
    </div>
   );
}
 
export default Sidebar;