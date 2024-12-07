import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Custom styling
import othelloImage from '../othello.jpeg';
import chessImage from '../chess.jpeg';
import pongImage from '../pong.png';
import tictactoeImage from '../tictactoe.jpg';
import logo from '../logo.png'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="header">AI & Solutions</h1>
      <div className="games-list">
        <Link to="/othello" className="game-card">
          <img src={othelloImage} alt="Othello" />
          <h2>Othello</h2>
        </Link>
        <Link to="/chess" className="game-card">
          <img src={chessImage} alt="Chess" />
          <h2>Chess</h2>
        </Link>
        <Link to="/pong" className="game-card">
          <img src={pongImage} alt="Pong" />
          <h2>Pong</h2>
        </Link>
        <Link to="/tictactoe" className="game-card">
          <img src={tictactoeImage} alt="Tic Tac Toe" />
          <h2>Tic Tac Toe</h2>
        </Link>
      </div>
      <div className="description">
        <h2>About Us</h2>
        <p>Filler text about RCOS, the team, and our mission.</p>
      </div>
    </div>
  );
};

export default Homepage;
