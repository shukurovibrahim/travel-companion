// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Support from "./components/Support.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <Navbar
        authModalOpen={authModalOpen}
        setAuthModalOpen={setAuthModalOpen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home setAuthModalOpen={setAuthModalOpen} setIsLogin={setIsLogin} />
          }
        />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
