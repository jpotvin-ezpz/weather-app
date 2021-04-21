import React from 'react';
import ReactDOM from 'react-dom'
import WeatherApp from './components/WeatherApp';


function Index() {
  return (
    <WeatherApp />
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))