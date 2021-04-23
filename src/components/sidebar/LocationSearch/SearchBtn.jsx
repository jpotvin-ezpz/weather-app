import React from 'react';

const SearchBtn = ({setIsSearching}) => {
  return ( 
    <button 
      className='search'
      onClick={() => setIsSearching(true)}  
    >
    Search for places
    </button>
   );
}
 
export default SearchBtn;