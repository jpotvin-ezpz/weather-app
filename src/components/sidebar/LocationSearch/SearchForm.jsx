import React from 'react';

const SearchForm = () => {
   
  return ( 
    <div className='loc-nav'>
      <div
        className='close'
        type="button"
      >
      </div>
      <div className='search-list--wrapper'>
        <div className='search-input--wrapper'>
          <span className='material-icons'>search</span>
          <input 
            className='search-input'
            type='text' 
            name='search' 
            placeholder='search location' 
          /> {/* onChange AJAX TypeAhead */}
        </div>
        <ul className='match-list'>
          {/* {matches} */}
          {/* adding dummy list for styling */}
          <li className='match-item'>
            <span>London</span>
            <span className="material-icons">
              chevron_right
            </span>
          </li>
        </ul>
      </div>
    </div>
   );
}
 
export default SearchForm;