import React from 'react';
import SearchBtn from './SearchBtn';
import GetCurrentLocation from './GetCurrentLocation';

const LocationSearch = ({setIsSearching, fetchLocal}) => {
  return ( 
    <div className='location-search'>
      <SearchBtn setIsSearching={setIsSearching}/>
      <GetCurrentLocation fetchLocal={fetchLocal}/>
    </div>
   );
}
 
export default LocationSearch;