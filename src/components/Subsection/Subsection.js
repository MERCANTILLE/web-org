import React from "react";
import "./Subsection.css";

export const Header = ({ text }) => {
  return <span className="Heading">{text}</span>;
};

const Subsection = ({ heading, children }) => {
  return (
    <div className="Subsection">
      <Header text={heading}></Header>
      <div className="Children"> {children} </div>
    </div>
  );
};

export default Subsection;
