import React from "react";

const Button = ({ value, onClick }) => (
  <>
    <button
      type="button"
      className={`square ${value === "X" ? "text-green" : "text-orange"}`}
      onClick={onClick}
    >
      {value}
    </button>
  </>
);

export default Button;
