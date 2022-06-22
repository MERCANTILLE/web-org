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

const LeftModalButton = ({ text, handleClick, disabled }) => {
  return (
    <button
      className={`LeftModalButton ModalButton ${disabled && "Disabled"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
const RightModalButton = ({ text, handleClick, disabled }) => {
  return (
    <button
      className={`RightModalButton ModalButton ${disabled && "Disabled"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const Popup = ({ children, pages = 2, title = "Popup", shown, closeModal }) => {
  const [backDisabled, setBackDisabled] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [save, setSave] = React.useState("Next");

  function nextPage() {
    if (page < pages) {
      setPage(page + 1);
      backDisabled && enableBack();
      if (page == pages - 1) {
        setSave("Save");
      }
    } else {
      savePopup();
    }
  }
  function prevPage() {
    console.log(page);
    if (page > 1) {
      setSave("Next");
      setPage(page - 1);
      if (page == 2) {
        disableBack();
      }
    }
  }
  function savePopup() {
    resetModal();
    closeModal();
  }

  function closeButton() {
    resetModal();
    closeModal();
  }

  function disableBack() {
    setBackDisabled(true);
  }

  function enableBack() {
    setBackDisabled(false);
  }

  function resetModal() {
    setPage(1);
    setSave("Next");
    disableBack();
  }

  return (
    <div>
      {shown ? (
        <div className="ModalContainer">
          <Overlay className="Overlay"></Overlay>
          <div className="Popup">
            <span className="ModalTitle">{title}</span>
            <CloseIcon size={15} handleClick={closeButton}></CloseIcon>
            {children.map((child, i) => (
              <div
                modalpage={i + 1}
                style={{ display: i + 1 == page ? "block" : "none" }}
              >
                {child}
              </div>
            ))}
            <LeftModalButton
              text="Back"
              disabled={backDisabled}
              handleClick={prevPage}
            ></LeftModalButton>
            <RightModalButton
              text={save}
              handleClick={nextPage}
            ></RightModalButton>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;
