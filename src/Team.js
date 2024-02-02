import React from 'react';
import Header from './Header'; // Import the Header component
import './Team.css'; // Assuming you have a separate CSS file for the team page
import andrewImage from './assets/andrew.png'; // Adjust the path as needed
import calebImage from './assets/caleb.jpeg'; // Adjust the path as needed

const Team = () => {
  return (
    <div>
      <Header />
      <div className="team-page-container">
      <h1>Meet the Team</h1>
      <div className="team-container">
        <div className="team-member">
          <img src={calebImage} alt="Caleb Tipton" />
          <h3>Caleb Tipton</h3>
          <p>A short description about Caleb.</p>
        </div>
        <div className="team-member">
          <img src={andrewImage} alt="Andrew Woods" />
          <h3>Andrew Woods</h3>
          <p>A short description about Andrew.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
