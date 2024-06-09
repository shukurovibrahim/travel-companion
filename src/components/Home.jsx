// Home.js

import React from "react";
import { useTranslation } from "react-i18next";
import Destination from "./Destination.jsx";
import Hotels from "./Hotels.jsx";
import Car from "./Car.jsx";
import "./Home.css";

const Home = ({ setAuthModalOpen, setIsLogin }) => {
  const { t } = useTranslation("app");

  return (
    <div className="home-container">
      <h1>{t("travelAroundDontStay")}</h1>
      <Destination />
      <Hotels /> {/* Update component name */}
      <Car setAuthModalOpen={setAuthModalOpen} setIsLogin={setIsLogin} />
    </div>
  );
};

export default Home;
