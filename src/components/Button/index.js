import React from "react";
import "./style.scss";

const Button = ({ text, onClick, width = 316 }) => {
  return (
    <div className="btn" style={{ width: `${width}px` }}>
      {text}
    </div>
  );
};

export default Button;
