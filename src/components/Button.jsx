import React from "react";

const Button = ({ value, onClick }) => (
  <>
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  </>
);

export default Button;
