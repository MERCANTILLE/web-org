import React from "react";
import "./SelectorButton.css";

const SelectorButton = ({
  text = "Select Me",
  icon = null,
  handleClick,
  selectedPage,
  iid,
}) => {
  console.log(iid);
  console.log(selectedPage);
  console.log(selectedPage === iid);
  return (
    <button
      style={{
        borderColor: selectedPage === iid ? "#4f2efe" : "#0c120c",
        color: selectedPage === iid ? "#4f2efe" : "#0c120c",
      }}
      className="SelectorButton"
      onClick={handleClick}
    >
      <img className="SelectorIcon" src={icon} alt="Selector Icon" />
      {text}
    </button>
  );
};

export default SelectorButton;
