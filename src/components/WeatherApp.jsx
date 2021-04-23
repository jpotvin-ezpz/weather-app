import React, {useEffect, useState} from 'react';
import MainContent from './maincontent/MainContent';
import Sidebar from './sidebar/Sidebar';
import Default from '../resources/default.json';
import '../styles/index.css'

function WeatherApp() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [weather, setWeather] = useState(Default);
  const [isSearching, setIsSearching] = useState(false)

  function fetchLocalWeather() {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latt = position.coords.latitude;
      const long = position.coords.longitude;
      let localWOEID;
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`)
      .then((response) => {
        if (!response.ok) {
          alert('Request access at https://cors-anywhere.herokuapp.com/corsdemo');
          throw new Error('Too many Requests or Check access https://cors-anywhere.herokuapp.com/corsdemo', response)
        } else { return response.json()}
      })
      .then(data => {
        localWOEID = data[0].woeid;
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${localWOEID}/`)
        .then(response => response.json())
        .then(data => setWeather(data))
      })
    })
  }

  function handleSetNewCity(data) {
    console.log(data);
    const WOEID = data.woeid
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${WOEID}/`)
    .then(response => {
      if (!response.ok) {
        alert('Request access at https://cors-anywhere.herokuapp.com/corsdemo');
        throw new Error('Too many Requests or Check access https://cors-anywhere.herokuapp.com/corsdemo', response)
      } else { 
        return response.json();
      }
    })
    .then(data => setWeather(data))
    setIsSearching(false);
  }
  
  function handleToggleUnits() {
    setIsCelsius(!isCelsius);
  }

  useEffect(() => {
    fetchLocalWeather()
  },[])


  return (
    <div className='weather-app'>
      <Sidebar
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        weather={weather}
        isCelsius={isCelsius}
        fetchLocal={fetchLocalWeather}
        handleSetNewCity={handleSetNewCity}
      />
      <MainContent 
        weather={weather} 
        isCelsius={isCelsius} 
        handleToggleUnits={handleToggleUnits}  
      />
      <footer>created by jpotvin-ezpz - devChallenges.io</footer>
    </div>
  )
}

export default WeatherApp;