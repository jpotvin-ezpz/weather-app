import React from 'react';

const LocationName = ({name}) => {
  return ( 
    <div className='location-name'>
      <span className='material-icons'>
        room
      </span>
      {name}
    </div>
   );
}
 
export default LocationName;