import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every((element) => {
    return element !== null;
  });
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXnext ? "X" : "O"}`}
      {!winner && noMovesLeft && "X and O TIED"}
    </h2>
  );
};
export default StatusMessage;
