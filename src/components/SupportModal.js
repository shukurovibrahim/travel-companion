// SupportModal.js

import React, { useState } from 'react';
import './SupportModal.css';
import closeIcon from './images/remove.png'; 

const SupportModal = ({ category, isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  if (!isOpen) return null;

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="support-modal">
        <div className="modal-header">
          <h2>{category} Support</h2>
          <button className="close-button" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className="modal-body">
          <div className="options">
            <h3>Options</h3>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="comment-section">
            <h3>Comment</h3>
            <textarea placeholder="Describe your problem here..." />
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
