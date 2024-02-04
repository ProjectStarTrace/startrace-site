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
          <p>Caleb Tipton is a full-stack software engineer and IT Administrator, currently advancing his studies at the University of North Dakota's College of Engineering and Mines. His entrepreneurial journey has led to the founding of Carbon ATM LLC, an environmental sensor company, and Tipton IT LLC, an IT consulting firm, both of which are based in Houston, Texas. Caleb's professional experience extends to consulting for startups, where he has contributed his expertise in software development, user interface design, and digital marketing to support their growth. </p>
        </div>
        <div className="team-member">
          <img src={andrewImage} alt="Andrew Woods" />
          <h3>Andrew Woods</h3>
          <p>Andrew Woods is a dedicated student at the University of North Dakota, specializing in back-end development and machine learning. His academic journey is marked by a notable collaboration on a project for the US Department of Defense, facilitated through the university. This collaboration not only highlights his technical expertise but also his ability to apply his knowledge to real-world applications, contributing to significant projects at a national level.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
