// HotelPopup.js

import React from 'react';
import './HotelPopup.css';

const HotelPopup = ({ hotel, onClose }) => {
  // Generate random hotel information
  const randomInfo = () => {
    // Sample information
    const amenities = [
      'Free Wi-Fi',
      'Soundproof rooms',
      'Swimming pool',
      'Fitness center',
      'Spa and wellness center',
      'Restaurant',
      'Bar',
      '24-hour front desk',
    ];

    const randomIndex = Math.floor(Math.random() * amenities.length);
    return amenities[randomIndex];
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{hotel.name}</h2>
        <p>{hotel.city}</p>
        <p>{randomInfo()}</p>
        <p>{randomInfo()}</p>
        <p>{randomInfo()}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default HotelPopup;
