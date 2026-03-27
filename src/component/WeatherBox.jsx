import React from 'react'

const WeatherBox = ({weather}) => {
  const celsius = weather?.main.temp;
  const fahrenheit = (celsius * 1.8 + 32).toFixed(1);

  return (
    <div className ="weather-box">
        <div>{weather?.name}</div>
        <h2>{celsius?.toFixed(1)}°C / {fahrenheit}°F</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox;