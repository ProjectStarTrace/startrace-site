import React from 'react';
import './App.css';
import starsImage from './assets/stars.jpg';
import startraceLogo from './assets/startrace.png'; // Import the logo image
import starscoutImage from './assets/starscout.png'; // Import the StarScout image
import starsageImage from './assets/starsage.png'; // Import the StarSage image
import starscopeImage from './assets/starscope.png'; // Import the StarScope image

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <img src={startraceLogo} alt="StarTrace Logo" className="logo" /> {/* Replace text with logo image */}
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

// MainContent component inside App.js
const MainContent = () => {
  return (
    <main>
      <section className="about-startrace">
        <h2>About StarTrace</h2>
        <p>
        The StarTrace project is an community-driven project dedicated to protecting Starlink satellites from jamming attacks.
        Its goal is to create a first-of-its-kind, comprehensive public overview of the StarLink satellite network, enhancing its security and functionality for users around the globe.
        </p>
        <div className="components-container">
        <div className="component-section">
          <a href="https://github.com/ProjectStarTrace/StarScout" className="component-link">
            <h3>StarScout</h3>
          </a>
          <img src={starscoutImage} alt="StarScout" className="component-image" />
          {/* StarScout description */}
        </div>

        <div className="component-section">
          <a href="https://github.com/ProjectStarTrace/StarSage" className="component-link">
            <h3>StarSage</h3>
          </a>
          <img src={starsageImage} alt="StarSage" className="component-image" />
          {/* StarSage description */}
        </div>

        <div className="component-section">
          <a href="https://github.com/ProjectStarTrace/StarScope" className="component-link">
            <h3>StarScope</h3>
          </a>
          <img src={starscopeImage} alt="StarScope" className="component-image" />
          {/* StarScope description */}
        </div>
      </div>
      </section>
      <section className= "otherHomepageContent">
        <h2>Goals and Methodology</h2>
        <p>
          StarTrace utilizes a machine learning algorithm to analyze satellite signal strength and data in conjunction with weather patterns and topography. This helps assess whether a weak signal is due to a deliberate attack or an external factor.
        </p>
      </section>
      <section className= "otherHomepageContent">
        <h2>User Interface and Data Contribution</h2>
        <p>
          Users receive assessments through a user interface and can contribute data towards the development of an open-source data repository. This repository aids the project and serves as a resource for similar initiatives.
        </p>
      </section>
      <section className= "otherHomepageContent">
        <h2>Community Involvement</h2>
        <p>
          As a community-driven initiative, StarTrace relies on crowdsourcing to enrich its dataset, empowering participants and enhancing the scope of the project. This approach contributes to a valuable open-source data repository.
        </p>
      </section>
      <section className= "otherHomepageContent">
        <h2>Future Directions</h2>
        <p>
          Looking forward, StarTrace aims to initiate projects using its comprehensive data on signal strength, weather, and topography, augmenting the core team's expertise through a primarily software-based design and limited hardware use.
        </p>
      </section>
      <div className="github-section">
        <h2>Help Us Trace The Stars! | Our GitHub Repositories</h2>
        <div className="buttons">
          <a href="https://github.com/ProjectStarTrace/StarScout" className="button">StarScout</a>
          <a href="https://github.com/ProjectStarTrace/StarSage" className="button">StarSage</a>
          <a href="https://github.com/ProjectStarTrace/StarScope" className="button">StarScope</a>
        </div>
      </div>  
    </main>
  );
};


const Footer = () => {
  return (
    <footer>
      <p>Copyright © StarTrace 2023</p>
    </footer>
  );
};

export default App;
