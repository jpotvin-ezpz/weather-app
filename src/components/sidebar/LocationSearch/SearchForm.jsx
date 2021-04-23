import React, {useState} from 'react';

const SearchForm = ({setIsSearching, handleSetNewCity}) => {
  const [matchList, setMatchList] = useState('');
  const [formVal, setFormVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVal === '') return;
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${formVal}`)
    .then((resp) => {
      if (!resp.ok) {
        alert('Request access at https://cors-anywhere.herokuapp.com/corsdemo');
        throw new Error ('Probably need to request access https://cors-anywhere.herokuapp.com/corsdemo')
      } else {
        return resp.json();
      }
    })
    .then(data => {
      setMatchList(data.map((data,index) => { 
        return (
          <li 
            className='match-item' 
            key={index} 
            onClick={() => handleSetNewCity(data)}
          >
            <span>{data.title}</span>
            <span className="material-icons">
              chevron_right
            </span>
        </li>
        )
      }))
    })
  }

   
  return ( 
    <div className='loc-nav'>
      <div
        className='close'
        type="button"
        onClick={() => setIsSearching(false)}
      >
      </div>
      <div className='search-list--wrapper'>
        <div className='search-input--wrapper'>
        <form className='search-form' onSubmit={(formVal) => handleSubmit(formVal)}>
          <div className='input-wrapper'>
          <span className='material-icons'>search</span>
          <input 
            className='search-input'
            type='text' 
            name='search' 
            placeholder='search location' 
            value={formVal}
            onChange={(e) => setFormVal(e.target.value)}
          /> 
          </div>
            <input className='submit-btn' type="submit" value="Search" />
        </form>
        </div>
        <ul className='match-list'>
          {matchList}
        </ul>
      </div>
    </div>
   );
}
 
export default SearchForm;