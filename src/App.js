import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, removeCity } from './redux/weatherSlice';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import ErrorBoundary from './components/ErrorBoundary';
import Error from './components/Error';
import useFetchWeather from './hooks/useFetchWeather';

const App = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weather.cities);
  const { fetchWeather, loading, error } = useFetchWeather();

  const handleAddCity = async (cityName) => {
    const cityData = await fetchWeather(cityName);
    if (cityData) dispatch(addCity(cityData));
  };

  const handleRemoveCity = (cityId) => {
    dispatch(removeCity(cityId));
  };

  return (
    <ErrorBoundary>
      <Header handleSearch={handleAddCity} />
      {loading && <p>Loading...</p>}
      {error && <Error message={error} />}
      <div className="weather-cards">
        {cities.map((city) => (
          <WeatherCard
            key={city.id}
            cityData={city}
            handleRemoveCity={() => handleRemoveCity(city.id)}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default App;
