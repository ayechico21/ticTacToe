import React, { useState } from "react";
import Button from "./Button";

const Board = ({ board, handleClick }) => {
  const renderSquare = (position) => {
    return (
      <Button value={board[position]} onClick={() => handleClick(position)} />
    );
  };

  return (
    <div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
