import React from "react";
import "./Dropdown.css";

const Dropdown = ({ text = "Select Me", options }) => {
  return (
    <select className="Dropdown">
      <option value="">{text}</option>
      {options.map((opt) => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default Dropdown;
