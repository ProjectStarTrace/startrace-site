// Header.js
import React, { useState } from 'react';
import './App.css';
import starsImage from './assets/stars.jpg';
import startraceLogo from './assets/startrace.png'; // Import the logo image
import starscoutImage from './assets/starscout.png'; // Import the StarScout image
import starsageImage from './assets/starsage.png'; // Import the StarSage image
import starscopeImage from './assets/starscope.png'; // Import the StarScope image
import { Link } from 'react-router-dom'; // Add this import


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
        <Link to="/"> {/* Wrap the logo with Link */}
        <img src={startraceLogo} alt="StarTrace Logo" className="logo" />
      </Link>
        <div className="hamburger-menu" onClick={toggleDropdown} onMouseLeave={closeDropdown}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="/downloads">Downloads</a>
            <a href="/team">The Team</a>
            <a href="https://scope.startrace.dev/">Open StarScope</a>
          </div>
          )}
        </div>
  
       
      </header>
    );
  };
  
  export default Header;