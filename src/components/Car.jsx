// Car.js

import React, { useState } from "react";
import "./Car.css"; // Import the Car.css stylesheet
import sedan from "./Car-images/sedan.png";
import CarPopup from "./CarPopup.jsx"; // Import the CarPopup component

const Car = ({ setAuthModalOpen, setIsLogin }) => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleDetailsClick = (carType) => {
    setSelectedCar(carType);
  };

  const handleClosePopup = () => {
    setSelectedCar(null);
  };

  const handleBasketClick = () => {
    setAuthModalOpen(true);
    setIsLogin(true);
    handleClosePopup();
  };

  return (
    <div className="car-container">
      <h2 className="car-heading">Rent a Car, Travel Fast</h2>
      <div className="car-types">
        <div className="car">
          <img src={sedan} alt="Eco Car" />
          <h3>Eco</h3>
          <p>Price: $50/day</p>
          <button onClick={() => handleDetailsClick("Eco")}>Details</button>
        </div>
        <div className="car">
          <img src={sedan} alt="Comfort Car" />
          <h3>Comfort</h3>
          <p>Price: $75/day</p>
          <button onClick={() => handleDetailsClick("Comfort")}>Details</button>
        </div>
        <div className="car">
          <img src={sedan} alt="Business Car" />
          <h3>Business</h3>
          <p>Price: $100/day</p>
          <button onClick={() => handleDetailsClick("Business")}>
            Details
          </button>
        </div>
      </div>
      {selectedCar && (
        <CarPopup
          carType={selectedCar}
          onClose={handleClosePopup}
          onBasketClicked={handleBasketClick}
        />
      )}
    </div>
  );
};

export default Car;
