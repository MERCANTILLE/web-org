import React from "react";
import "./Popup.css";
import { FiX } from "react-icons/fi";

const Overlay = () => {
  return <div className="Overlay"></div>;
};

const CloseIcon = ({ size, handleClick }) => {
  return (
    <svg className="CloseIcon" onClick={handleClick}>
      <line x1="16" y1="0" x2="0" y2="16"></line>
      <line x1="0" y1="0" x2="16" y2="16"></line>
    </svg>
  );
};

const LeftModalButton = ({ text, handleClick }) => {
  return (
    <button className="LeftModalButton ModalButton" onClick={handleClick}>
      {text}
    </button>
  );
};
const RightModalButton = ({ text, handleClick }) => {
  return (
    <button className="RightModalButton ModalButton" onClick={handleClick}>
      {text}
    </button>
  );
};

const Popup = ({ children, pages = 1, title = "Popup", shown }) => {
  const [showModal, setShowModal] = React.useState(shown);

  function closeModal() {
    console.log("shown is " + shown);
    console.log("showModal is " + showModal);
    console.log("I'm closed now");
    setShowModal(false);
    shown = false;
    console.log("shown is " + shown);
    console.log("showModal is " + showModal);
  }

  return (
    <div>
      {shown ? (
        <div className="ModalContainer">
          <Overlay className="Overlay"></Overlay>
          <div className="Popup">
            <span className="ModalTitle">{title}</span>
            <CloseIcon size={15} handleClick={closeModal}></CloseIcon>
            {children}
            <LeftModalButton text="Back"></LeftModalButton>
            <RightModalButton text={"Next"}></RightModalButton>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;
