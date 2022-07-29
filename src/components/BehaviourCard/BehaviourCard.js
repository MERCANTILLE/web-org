import React from "react";
import "./BehaviourCard.css";

const BehaviourCard = ({
  name = "Open Something",
  sourcenum = 5,
  actionum = 10,
  handleClick,
  selectedAction,
  iid,
}) => {
  // console.log(iid);
  // console.log(selectedAction);
  // console.log(selectedAction === iid);

  return (
    <div
      style={{
        borderColor: selectedAction === iid ? "#4f2efe" : "#0c120c",
        color: selectedAction === iid ? "#4f2efe" : "#0c120c",
      }}
      className="BehaviourCard"
      onClick={handleClick}
    >
      <p className="BehaviorActions">
        <span style={{ color: "#4f2efe" }}>{actionum}</span> actions
      </p>
      <p className="BehaviourSources">
        <span style={{ color: "#4f2efe" }}>{sourcenum}</span> sources
      </p>
      <h3 className="BehaviourCardName">{name}</h3>
    </div>
  );
};

export default BehaviourCard;
