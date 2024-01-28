// Header.js
import React, { useState } from 'react';
import './App.css';
import starsImage from './assets/stars.jpg';
import startraceLogo from './assets/startrace.png'; // Import the logo image
import starscoutImage from './assets/starscout.png'; // Import the StarScout image
import starsageImage from './assets/starsage.png'; // Import the StarSage image
import starscopeImage from './assets/starscope.png'; // Import the StarScope image


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const closeDropdown = () => {
      setIsDropdownOpen(false);
    };
  
    return (
      <header>
        <img src={startraceLogo} alt="StarTrace Logo" className="logo" />
        <div className="hamburger-menu" onClick={toggleDropdown} onMouseLeave={closeDropdown}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="https://startrace.dev/scope">Open StarScope</a>
            <a href="/downloads">Downloads</a>
            <a href="/leaderboard">Leaderboard</a>
          </div>
          )}
        </div>
  
        <div className="image-container">
          <img src={starsImage} alt="Stars" />
          <div className="overlay-text">
            GATHER.<br />
            APPLY.<br />
            DEMONSTRATE.
          </div>
        </div>
        <nav>
          {/* Navigation Links */}
        </nav>
      </header>
    );
  };
  
  export default Header;