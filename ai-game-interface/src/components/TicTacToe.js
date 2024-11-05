// src/components/TicTacToe.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] || !playerTurn) return;
    const newBoard = [...board];
    newBoard[index] = 'X';  // Player is 'X'
    setBoard(newBoard);
    setPlayerTurn(false);

    // Simulate AI move after player's move
    setTimeout(() => {
      const emptyIndices = newBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
      if (emptyIndices.length > 0) {
        const aiMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newBoard[aiMove] = 'O';  // AI is 'O'
        setBoard(newBoard);
        setPlayerTurn(true);
      }
    }, 1000);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
  };

  return (
    <div className="game-page">
      <h1>Tic-Tac-Toe</h1>
      <Link to="/" className="back-button">Back to Home</Link>
      <div className="game-board tictactoe-board">
        {board.map((cell, index) => (
          <div key={index} className="board-cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <div className="game-controls">
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="turn-indicator">
        {playerTurn ? "Your Turn" : "AI's Turn"}
      </div>
      <div className="game-info">
        <h2>How to Play</h2>
        <p>Take turns placing your symbol on a 3x3 grid. The first to line up 3 wins!</p>
        <h2>How the Game Works</h2>
        <p>Players alternate placing their symbols in the cells.</p>
        <h2>How the Model Was Trained</h2>
        <p>Placeholder for AI model details.</p>
      </div>
    </div>
  );
};

export default TicTacToe;