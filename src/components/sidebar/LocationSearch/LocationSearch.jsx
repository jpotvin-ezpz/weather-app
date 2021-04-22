import React from 'react';
import SearchBtn from './SearchBtn';
import GetCurrentLocation from './GetCurrentLocation';

const LocationSearch = () => {
  return ( 
    <div className='location-search'>
      <SearchBtn />
      <GetCurrentLocation />
    </div>
   );
}
 
export default LocationSearch;