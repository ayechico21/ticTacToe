import React from "react";

const history = ({ history, moveTo, currentMove }) => {
  return (
    <>
      <ul>
        {history.map((_, idx) => {
          return (
            <li key={idx}>
              <button
                style={{
                  fontWeight: idx === currentMove ? "bold" : "normal",
                }}
                type="button"
                onClick={() => {
                  moveTo(idx);
                }}
              >
                {idx === 0 ? "go to Game Start" : `go to move #${idx}`}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default history;
