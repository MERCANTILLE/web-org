import React from "react";
import "./ActionCard.css";

const ActionCard = ({
  name = "Open Something",
  app = "Mercantille",
  icon = null,
  handleClick,
  behaviours = "Promotion, Engagement",
  selectedAction,
  iid,
}) => {
  // console.log(iid);
  // console.log(selectedAction);
  // console.log(selectedAction === iid);
  var processedBehaviours = new String();
  const concatActions = behaviours.forEach((element, i) => {
    if (i != behaviours.length - 1) {
      processedBehaviours += element + ", ";
    } else if (i === behaviours.length - 1) {
      processedBehaviours += element;
    }
  });
  // console.log(processedBehaviours);
  return (
    <div
      style={{
        borderColor: selectedAction === iid ? "#4f2efe" : "#0c120c",
        color: selectedAction === iid ? "#4f2efe" : "#0c120c",
      }}
      className="ActionCard"
      onClick={handleClick}
    >
      <h3 className="ActionCardName">{name}</h3>
      <p className="ActionBehaviours">{processedBehaviours}</p>
      <p className="ActionApp">
        <img className="ActionCardAppIcon" src={icon} alt="Selector Icon" />
        {app}
      </p>
    </div>
  );
};

export default ActionCard;
