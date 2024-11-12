import React from 'react';
import './Weathercard.css';
const WeatherCard = ({ cityData, handleRemoveCity }) => (
  <div className="weather-card">
    <h3>{cityData.name}</h3>
    <p>Temperature: {cityData.main.temp}°C</p>
    <p>Humidity: {cityData.main.humidity}%</p>
    <p>Condition: {cityData.weather[0].description}</p>
    <button onClick={handleRemoveCity}>Remove</button>
  </div>
);

export default WeatherCard;
