// CarPopup.js

import React from "react";
import "./CarPopup.css";
import basket from "./Car-images/basket.png";

const CarPopup = ({ carType, onClose, onBasketClicked }) => {
  const carDetails = {
    Eco: {
      models: ["Toyota Prius", "Honda Insight"],
      features: ["Fresh Air", "Bluetooth", "Low Emissions"],
      price: "$50/day",
    },
    Comfort: {
      models: ["Toyota Camry", "Honda Accord"],
      features: ["Comfort Seats", "Bluetooth", "Climate Control"],
      price: "$75/day",
    },
    Business: {
      models: ["BMW 5 Series", "Audi A6"],
      features: ["Luxury Interior", "Premium Sound System", "WiFi"],
      price: "$100/day",
    },
  };

  const details = carDetails[carType];

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{carType} Car Details</h2>
        <p>
          <strong>Models:</strong> {details.models.join(", ")}
        </p>
        <p>
          <strong>Features:</strong> {details.features.join(", ")}
        </p>
        <p>
          <strong>Price:</strong> {details.price}
        </p>
        <button onClick={onBasketClicked}>
          <img src={basket} alt="Basket" className="basket-icon" />
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CarPopup;
