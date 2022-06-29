import React from "react";
import "./Radio.css";

const Radio = ({ name, options }) => {
  return (
    <div>
      {options.map((opt) => (
        <div className="Radio">
          <input type="radio" name={name} value={opt}></input>
          <label>{opt}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
