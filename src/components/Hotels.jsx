// Hotels.js

import React, { useState } from 'react';
import stays from './Stays.jsx'; // Import the stays data
import HotelPopup from './HotelPopup.jsx'; // Import the HotelPopup component
import './Hotels.css';

const Hotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false); // State to manage pop-up visibility
  const [selectedHotel, setSelectedHotel] = useState(null); // State to store selected hotel information

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stays.length - 1 : prevIndex - 1)); // Go to previous stay
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stays.length - 1 ? 0 : prevIndex + 1)); // Go to next stay
  };

  // Function to handle click on hotel image
  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel); // Set selected hotel information
    setPopupVisible(true); // Show pop-up window
  };

  // Function to close pop-up window
  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="hotels-container">
      <h2 className="hotels-heading">Discover Amazing Hotels</h2>
      <div className="carousel">
        <button className="carousel-button left" onClick={handlePrev}>‹</button>
        <div className="hotel-card">
          <h3>{stays[currentIndex].name}</h3>
          <p>{stays[currentIndex].city}</p>
          <div className="hotel-images">
            {stays[currentIndex].images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Hotel ${stays[currentIndex].name} ${index + 1}`} 
                onClick={() => handleHotelClick(stays[currentIndex])} // Handle click on hotel image
              />
            ))}
          </div>
          <p>{stays[currentIndex].info}</p>
        </div>
        <button className="carousel-button right" onClick={handleNext}>›</button>
      </div>
      {popupVisible && (
        <HotelPopup hotel={selectedHotel} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Hotels;
