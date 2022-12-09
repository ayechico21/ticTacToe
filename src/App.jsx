import React, { useState } from "react";
import Board from "./components/Board";
import calculateWinner from "./helper";
import "./styles/root.scss";
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(true);
  let winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXnext ? "X" : "O"}`;

  const handleClick = (position) => {
    if (board[position] || winner) return;
    const mark = isXnext ? "X" : "O";
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) return mark;
        return square;
      });
    });
    setisXnext((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};

export default App;
