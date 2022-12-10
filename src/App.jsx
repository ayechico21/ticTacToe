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
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleClick={handleClick} />
      <button
        className={`btn-reset ${winner ? "active" : ""}`}
        onClick={() => startNewGame()}
      >
        Start New Game
      </button>
      <h2>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
};

export default App;
