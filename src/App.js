import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './Home';
import Downloads from './Downloads'; // Import the Downloads component
import Team from './Team'; // Import the Leaderboard component
import Header from './Header'; // Import the Header component

import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/team" element={<Team />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
};




export default App;
