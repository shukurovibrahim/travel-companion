import React, { useState } from "react";
import "./Support.css";
import closeIcon from "./images/remove.png"; // Ensure the path is correct

const categories = [
  "Account",
  "Security",
  "Privacy",
  "Flight",
  "Packages",
  "Refunds & Charges",
  "Lodging",
  "Car",
  "Destination Services",
];

// Define options for each category
const categoryOptions = {
  Account: ["Can't log into account", "Website returns error"],
  Security: ["Forgot password", "Suspicious activity"],
  Privacy: ["Data request", "Data breach"],
  Flight: ["Flight delay", "Flight cancellation"],
  Packages: ["Package not received", "Package damaged"],
  "Refunds & Charges": ["Request a refund", "Incorrect charge"],
  Lodging: ["Booking issue", "Room problem"],
  Car: ["Rental issue", "Car problem"],
  "Destination Services": ["Tour issue", "Guide problem"],
};

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [comment, setComment] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <div className="support-container">
        <h1>Is there any problem? Let us help you</h1>
        <div className="categories">
          {categories.map((category) => (
            <div
              key={category}
              className="category"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        {selectedCategory && (
          <div className="modal-overlay">
            <div className="support-modal">
              <div className="modal-header">
                <h2>{selectedCategory}</h2>
                <button className="close-button" onClick={handleCloseModal}>
                  <img src={closeIcon} alt="Close" />
                </button>
              </div>
              <div className="modal-body">
                <div className="options">
                  <h3>Options</h3>
                  <select>
                    {categoryOptions[selectedCategory].map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="detail-section">
                  <h3>Details</h3>
                  <textarea placeholder="Provide additional details of your problem here..."></textarea>
                </div>
                <button className="submit-button">Submit</button>
              </div>
            </div>
          </div>
        )}
        <div className="additional-detail-section">
          <h2>If there is anything else please write down:</h2>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your problem here..."
          ></textarea>
          {comment && <button className="submit-button">Submit</button>}
        </div>
      </div>
    </>
  );
};

export default Support;
