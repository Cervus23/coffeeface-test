import React from "react";
import "./style.scss";

const Button = ({ text, onClick }) => {
  return <div className="btn">{text}</div>;
};

export default Button;
