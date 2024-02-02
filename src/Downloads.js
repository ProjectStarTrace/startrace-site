// Downloads.js
import React from 'react';
import Header from './Header'; // Import the Header component
import starScoutDownloadImage from './assets/starScoutCartoonGuy.png'; // Make sure the path matches
import './Downloads.css';
import rasPiImage from './assets/raspPi.png';
import microSDImage from './assets/microSD.png';
import balena from './assets/balena.png'; // Make sure the path matches
import webpage from './assets/webpage.svg'; // Import the StarScope image

const Downloads = () => {
  return (
    <div>
      <Header />
      {/* Full-width image at the top */}
      <div className="full-width-image-container">
        <img src={starScoutDownloadImage} alt="StarScout Download" />
      </div>

      {/* Download options */}
      <div className="download-options-container">
        <div className="download-option">
          <h2>StarScout Lite</h2>
          <p>Install StarScout Lite on your Linux device for advanced users.</p>
          <a href="link-to-download-lite-version" className="download-link">Download StarScout Lite</a>
        </div>

        <div className="download-option">
          <h2>StarScout Raspberry Pi Image</h2>
          <p>Download a prepackaged image to flash onto a Raspberry Pi.</p>
          <a href="link-to-download-raspberry-version" className="download-link">Download Raspberry Pi Image</a>
        </div>
      </div>

      <hr />

      {/* Setup guide */}
      <div className="setup-guide">
        <h2>Setting Up Your Raspberry Pi with StarScout</h2>
        <div className="setup-steps">
          <div className="step">
            <img src={microSDImage} alt="MicroSD Card" />
            <p>1) Download the Image and plug a 32GB or larger MicroSD card into your computer.</p>
          </div>
          <div className="step">
            <img src={balena} alt="Balena Etcher" />
            <p>2) Download Balena Etcher and load the image file into the program, selecting the MicroSD card.</p>
          </div>
          <div className="step">
            <img src={rasPiImage} alt="Raspberry Pi" />
            <p>3) Once flashing is complete, plug the SD Card into the Raspberry Pi and connect it to power and network.</p>
          </div>
          <div className="step">
            <img src={webpage} alt="StarScout Setup" />
            <p>4) Navigate to StarScout.local and follow the on-screen prompts for setup.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;