// src/components/Othello.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';  // Assume this CSS file handles board layout and styling

const Othello = () => {
  const [board, setBoard] = useState(initializeBoard());
  const [playerTurn, setPlayerTurn] = useState(true); // true for player, false for AI
  const [gameOver, setGameOver] = useState(false);

  function initializeBoard() {
    // Create an 8x8 grid with initial Othello pieces setup
    const board = Array(8).fill(null).map(() => Array(8).fill(null));
    board[3][3] = board[4][4] = 'white';
    board[3][4] = board[4][3] = 'black';
    return board;
  }

  const handleClick = (row, col) => {
    if (gameOver || board[row][col] !== null) return;

    // Placeholder logic for making a move, replace with real game logic later
    const newBoard = [...board];
    newBoard[row][col] = playerTurn ? 'black' : 'white';
    setBoard(newBoard);
    setPlayerTurn(!playerTurn);
  };

  const handleReset = () => {
    setBoard(initializeBoard());
    setPlayerTurn(true);
    setGameOver(false);
  };

  const handlePlayAI = () => {
    // Simulate AI move here with transformers.js (replace later with real model)
    console.log("AI is thinking...");
  };

  return (
    <div className="game-page">
      <h1>Othello</h1>
      <Link to="/" className="back-button">Back to Home</Link>
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="board-cell" onClick={() => handleClick(rowIndex, colIndex)}>
                {cell && <div className={`piece ${cell}`}></div>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="game-controls">
        <button onClick={handlePlayAI}>Play AI</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="turn-indicator">
        {playerTurn ? "Your Turn" : "AI's Turn"}
      </div>
      <div className="game-info">
        <h2>How to Play</h2>
        <p>Othello is a strategy game where players alternate placing pieces to capture their opponent’s.</p>
        <h2>How the Game Works</h2>
        <p>Pieces are placed on an 8x8 grid, flipping opponent pieces between yours to your color.</p>
        <h2>How the Model Was Trained</h2>
        <p>Placeholder for AI model details.</p>
      </div>
    </div>
  );
};

export default Othello;