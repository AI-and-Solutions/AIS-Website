// src/components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';  // Custom styling

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="logo"> {/* Add a logo image here if available */}
        <img src="/path-to-logo.png" alt="Logo" />
      </div>
      <h1>AI & Solutions</h1>
      <div className="games-list">
        <Link to="/othello">Othello</Link>
        <Link to="/chess">Chess</Link>
        <Link to="/pong">Pong</Link>
        <Link to="/tictactoe">Tic Tac Toe</Link>
      </div>
      <div className="description">
        <h2>About Us</h2>
        <p>Filler text about RCOS, the team, and our mission.</p>
      </div>
    </div>
  );
};

export default Homepage;