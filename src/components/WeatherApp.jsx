import React, {useEffect, useState} from 'react';
import MainContent from './maincontent/MainContent';
import Sidebar from './sidebar/Sidebar';
import Default from '../resources/default.json';
import '../styles/index.css'

function WeatherApp() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [weather, setWeather] = useState(Default);

  function fetchLocalWeather() {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latt = position.coords.latitude;
      const long = position.coords.longitude;
      let localWOEID;
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`)
      .then((response) => response.json())
      .then(data => {
        localWOEID = data[0].woeid;
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${localWOEID}/`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
        })
      })
    })
  }

  // TODO invoke in Unit toggler
  function handleToggleUnits() {
    setIsCelsius(!isCelsius);
  }

  // useEffect(() => {
  //   fetchLocalWeather()
  // },[])

  // console.log(weather)

  return (
    <div className='weather-app'>
      <Sidebar
        weather={weather}
        isCelsius={isCelsius}
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