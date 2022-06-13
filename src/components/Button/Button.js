import React from "react";
import "./Button.css";

const Button = ({ text = "Click Me", icon = null, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
