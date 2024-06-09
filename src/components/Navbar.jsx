import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import checkmarkIcon from "./images/check-mark.png";
import darkIcon from "./images/dark.png";
import lightIcon from "./images/light.png";
import closeIcon from "./images/remove.png";
import { useTranslation } from "react-i18next";

const langs = {
  az: "Azerbaijani",
  en: "English",
  ru: "Russian",
};

const Navbar = ({ authModalOpen, setAuthModalOpen, isLogin, setIsLogin }) => {
  const { i18n } = useTranslation();
  const [revealBrand, setRevealBrand] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setRevealBrand(true);
    }, 500);

    return () => clearTimeout(timerRef.current);
  }, []);

  const toggleLanguageModal = () => {
    setLanguageModalOpen(!languageModalOpen);
  };

  const handleLanguageChange = async (language) => {
    await i18n.changeLanguage(language);
    setLanguageModalOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => {
      if (!darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      return !darkMode;
    });
  };

  const openLoginModal = () => {
    setLanguageModalOpen(false);
    setAuthModalOpen(true);
    setIsLogin(true);
  };

  const openSignUpModal = () => {
    setLanguageModalOpen(false);
    setAuthModalOpen(true);
    setIsLogin(false);
  };

  const closeModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-brand ${revealBrand ? "reveal" : ""}`}>
        Traveller
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <button onClick={toggleDarkMode}>
            <img
              src={darkMode ? lightIcon : darkIcon}
              alt="Dark Mode Toggle"
              className="dark-mode-icon"
            />
          </button>
        </li>
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <button className="language" onClick={toggleLanguageModal}>
            {langs[i18n.language]}
          </button>
          {languageModalOpen && (
            <div className="modal">
              <h2>Select Language</h2>
              <ul>
                {i18n.languages.map((lang) => (
                  <li key={lang} onClick={() => handleLanguageChange(lang)}>
                    {i18n.language === lang && (
                      <img src={checkmarkIcon} alt="Selected" />
                    )}{" "}
                    {langs[lang]}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="navbar-item">
          <Link to="/support">Support</Link>
        </li>
        <li className="navbar-item">
          <button onClick={openLoginModal}>Login</button>
        </li>
        <li className="navbar-item">
          <button onClick={openSignUpModal}>Sign Up</button>
        </li>
      </ul>

      {/* Authentication Modal */}
      {authModalOpen && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <div className="auth-header">
              <button
                className={`auth-toggle-button ${isLogin && "active"}`}
                onClick={openLoginModal}
              >
                Login
              </button>
              <button
                className={`auth-toggle-button ${!isLogin && "active"}`}
                onClick={openSignUpModal}
              >
                Sign Up
              </button>
              <button className="close-button" onClick={closeModal}>
                <img src={closeIcon} alt="Close" />
              </button>
            </div>
            <div className="auth-form">
              {!isLogin ? (
                <form>
                  <h2>Sign Up</h2>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" />
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" id="confirm-password" />
                  <button className="auth-button">Sign Up</button>
                </form>
              ) : (
                <form>
                  <h2>Login</h2>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                  <button className="auth-button">Login</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
