import React, { useState } from "react";
import cities from "./cities";
import "./Destination.css";
import removeIcon from "./images/remove.png";
import { useTranslation } from "react-i18next";

const Destination = () => {
  const { t } = useTranslation("app");
  const [selectedCity, setSelectedCity] = useState(null);

  const handleClick = (city) => {
    setSelectedCity(city);
  };

  const handleClose = () => {
    setSelectedCity(null);
  };

  return (
    <div className="destination-section">
      <div className="destination-header">
        <h2 className="destination-heading">Popular places waiting for you</h2>
      </div>
      <div className="destination-container">
        {cities.map((city, index) => (
          <div
            key={index}
            className="destination-item"
            onClick={() => handleClick(city)}
          >
            <img src={city.image} alt={city.city} />
            <p>{`${city.country}, ${city.city}`}</p>
          </div>
        ))}
      </div>

      {selectedCity && (
        <div className="popup-container">
          <div className="popup-content">
            <img
              src={removeIcon}
              alt="Close"
              className="close-icon"
              onClick={handleClose}
            />
            <h2>
              {selectedCity.city}, {selectedCity.country}
            </h2>
            <p>{selectedCity.introduction}</p>
            <p>
              <strong>{t("airport")}:</strong> {selectedCity.airport}
            </p>
            <p>
              <strong>Hotel:</strong> {selectedCity.hotel}
            </p>
            <p>
              <strong>Car Rental:</strong> {selectedCity.carRental}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
