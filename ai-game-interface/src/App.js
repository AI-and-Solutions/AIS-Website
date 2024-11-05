// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Othello from './components/Othello';
import Chess from './components/Chess';
import Pong from './components/Pong';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/othello" element={<Othello />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/pong" element={<Pong />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;