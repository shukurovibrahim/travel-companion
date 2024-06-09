// components/Footer.js
import React from 'react';
import './Footer.css';

const footerCategories = {
  Company: ['About Us', 'Careers', 'Press'],
  Explore: ['Destinations', 'Experiences', 'Travel Blog'],
  Help: ['Support', 'Contact Us', 'FAQs']
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {Object.keys(footerCategories).map((category) => (
          <div key={category} className="footer-column">
            <h3>{category}</h3>
            <ul>
              {footerCategories[category].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2024 Traveller. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
