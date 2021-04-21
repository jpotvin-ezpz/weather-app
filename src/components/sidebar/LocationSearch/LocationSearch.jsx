import React from 'react';
import Search from './Search';
import GetCurrentLocation from './GetCurrentLocation';

const LocationSearch = () => {
  return ( 
    <div className='location-search'>
      <Search />
      <GetCurrentLocation />
    </div>
   );
}
 
export default LocationSearch;