import { useState } from 'react';
import axios from 'axios';

const useFetchWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: process.env.REACT_APP_API_KEY,
            units: 'metric',
          },
        }
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setError('Failed to fetch weather data');
      setLoading(false);
      return null;
    }
  };

  return { fetchWeather, loading, error };
};

export default useFetchWeather;