import React from 'react';
import './CityPopup.css';

const CityPopup = ({ city, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{city.city}, {city.country}</h2>
        <p>Airport: {city.airport}</p>
        <p>Hotel: {city.hotel}</p>
        <p>Car Rental: {city.carRental}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CityPopup;
