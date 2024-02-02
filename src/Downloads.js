// Downloads.js
import React from 'react';
import Header from './Header'; // Import the Header component
import starScoutDownloadImage from './assets/starscoutDownload1.png'; // Make sure the path matches
import './Downloads.css';

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
        <p>Follow these easy steps to get started with StarScout on your Raspberry Pi:</p>
        {/* Include your guide steps here */}
      </div>
    </div>
  );
};

export default Downloads;