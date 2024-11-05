// src/components/Chess.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

const Chess = () => {
  const [board, setBoard] = useState(initializeBoard());
  const [playerTurn, setPlayerTurn] = useState(true); // true for player, false for AI

  function initializeBoard() {
    // Simplified initial chess board setup
    const board = Array(8).fill(null).map(() => Array(8).fill(null));
    // Add pawns, kings, queens, and other pieces (simplified)
    board[1] = Array(8).fill('blackPawn');
    board[6] = Array(8).fill('whitePawn');
    // Add other pieces (kings, queens, etc.)
    board[0] = ['blackRook', 'blackKnight', 'blackBishop', 'blackQueen', 'blackKing', 'blackBishop', 'blackKnight', 'blackRook'];
    board[7] = ['whiteRook', 'whiteKnight', 'whiteBishop', 'whiteQueen', 'whiteKing', 'whiteBishop', 'whiteKnight', 'whiteRook'];
    return board;
  }

  const handleClick = (row, col) => {
    if (board[row][col] === null || !playerTurn) return;

    // Placeholder move logic, just for player interactions
    console.log(`Piece at (${row}, ${col}) selected`);
    setPlayerTurn(false);
  };

  const handleReset = () => {
    setBoard(initializeBoard());
    setPlayerTurn(true);
  };

  const handlePlayAI = () => {
    // Placeholder AI move logic
    console.log("AI is thinking...");
    setPlayerTurn(true);
  };

  return (
    <div className="game-page">
      <h1>Chess</h1>
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
        <p>Chess is a strategy game where players move pieces to capture the opponent’s king.</p>
        <h2>How the Game Works</h2>
        <p>The game ends when one player checkmates the other’s king.</p>
        <h2>How the Model Was Trained</h2>
        <p>Placeholder for AI model details.</p>
      </div>
    </div>
  );
};

export default Chess;