// src/components/Pong.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

const Pong = () => {
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [playerPaddle, setPlayerPaddle] = useState(40);
  const [aiPaddle, setAIPaddle] = useState(40);
  const [gameRunning, setGameRunning] = useState(false);

  const startGame = () => {
    setGameRunning(true);
    // Placeholder for game loop (use requestAnimationFrame or intervals)
  };

  const resetGame = () => {
    setBallPosition({ x: 50, y: 50 });
    setPlayerPaddle(40);
    setAIPaddle(40);
    setGameRunning(false);
  };

  useEffect(() => {
    if (gameRunning) {
      const interval = setInterval(() => {
        setBallPosition((prev) => ({
          x: prev.x + 1, // Placeholder movement logic
          y: prev.y + 1,
        }));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [gameRunning]);

  return (
    <div className="game-page">
      <h1>Pong</h1>
      <Link to="/" className="back-button">Back to Home</Link>
      <div className="pong-game">
        <div className="paddle" style={{ top: `${playerPaddle}%` }}></div>
        <div className="ball" style={{ top: `${ballPosition.y}%`, left: `${ballPosition.x}%` }}></div>
        <div className="paddle ai" style={{ top: `${aiPaddle}%` }}></div>
      </div>
      <div className="game-controls">
        <button onClick={startGame}>Start Game</button>
        <button onClick={resetGame}>Reset</button>
      </div>
      <div className="game-info">
        <h2>How to Play</h2>
        <p>Use your paddle to bounce the ball and prevent it from going past you.</p>
        <h2>How the Game Works</h2>
        <p>The ball bounces between paddles, and the AI tries to keep up.</p>
        <h2>How the Model Was Trained</h2>
        <p>Placeholder for AI model details.</p>
      </div>
    </div>
  );
};

export default Pong;