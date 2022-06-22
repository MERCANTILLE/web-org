import React from "react";
import "./SelectorButton.css";

const SelectorButton = ({ text = "Select Me", icon = null, handleClick }) => {
  return (
    <button className="SelectorButton" onClick={handleClick}>
      {text}
    </button>
  );
};

export default SelectorButton;
