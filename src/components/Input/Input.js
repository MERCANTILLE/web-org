import React from "react";
import "./Input.css";

const Input = ({ placeholder = "Type in text", handleChange }) => {
  return <input onChange={handleChange} placeholder={placeholder}></input>;
};

export default Input;
