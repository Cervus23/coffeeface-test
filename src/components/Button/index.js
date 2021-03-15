import React from "react";
import "./style.scss";

const Button = ({ text, onClick, width }) => {
  return (
    <div className="btn" style={{ width: `${width}px` }}>
      {text}
    </div>
  );
};

export default Button;
