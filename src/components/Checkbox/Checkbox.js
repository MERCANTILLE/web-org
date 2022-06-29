import React from "react";
import "./Checkbox.css";

const Checkbox = ({ options }) => {
  return (
    <div>
      {options.map((opt) => (
        <div className="Checkbox">
          <input type="checkbox" value={opt}></input>
          <label>{opt}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
