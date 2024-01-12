import React from 'react';
import './App.css';
// Import the image
import starsImage from './assets/stars.jpg';

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
      <h1>StarTrace</h1>
      <div className="image-container">
        <img src={starsImage} alt="Stars" />
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
      <section>
        <h2>About StarTrace</h2>
        <p>
          The StarTrace project is centered around safeguarding Starlink satellites from jamming attacks. It aims to provide the first publicly-available holistic view of the StarLink satellite network.
        </p>
      </section>
      <section>
        <h2>Goals and Methodology</h2>
        <p>
          StarTrace utilizes a machine learning algorithm to analyze satellite signal strength and data in conjunction with weather patterns and topography. This helps assess whether a weak signal is due to a deliberate attack or an external factor.
        </p>
      </section>
      <section>
        <h2>User Interface and Data Contribution</h2>
        <p>
          Users receive assessments through a user interface and can contribute data towards the development of an open-source data repository. This repository aids the project and serves as a resource for similar initiatives.
        </p>
      </section>
      <section>
        <h2>Community Involvement</h2>
        <p>
          As a community-driven initiative, StarTrace relies on crowdsourcing to enrich its dataset, empowering participants and enhancing the scope of the project. This approach contributes to a valuable open-source data repository.
        </p>
      </section>
      <section>
        <h2>Future Directions</h2>
        <p>
          Looking forward, StarTrace aims to initiate projects using its comprehensive data on signal strength, weather, and topography, augmenting the core team's expertise through a primarily software-based design and limited hardware use.
        </p>
      </section>
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
