import React, { useState } from "react";
import Board from "./components/Board";
import calculateWinner from "./helper";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss";

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXnext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  let winner = calculateWinner(current.board);

  const handleClick = (position) => {
    if (current.board[position] || winner) return;

    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return current.isXnext ? "X" : "O";
        }
        return square;
      });

      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const startNewGame = () => {
    setHistory([{ board: Array(9).fill(null), isXnext: true }]);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleClick={handleClick} />
      <button onClick={() => startNewGame()}>Start New Game</button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
