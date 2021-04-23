import React from 'react';

const GetCurrentLocation = ({fetchLocal}) => {
  return ( 
    <button
      type="button"
      className='get-current-btn'
      onClick={() => fetchLocal()}
    >
    <span className='material-icons'>
      my_location
    </span>
    </button>
   );
}
 
export default GetCurrentLocation;