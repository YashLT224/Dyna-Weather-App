import React, { useState } from 'react';
import './header.css';

const Header = ({ handleSearch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const validateInput = (input) => {
    // Regex: allows only letters and spaces
    const isValid = /^[a-zA-Z\s]+$/.test(input);
    return isValid && input.trim().length > 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateInput(city)) {
      setError(''); // Clear error if valid
      handleSearch(city); // Trigger search
      setCity(''); // Clear input
    } else {
      setError('Please enter a valid city name (letters and spaces only).');
    }
  };

  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error if invalid */}
    </header>
  );
};

export default Header;
