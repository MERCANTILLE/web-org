import React from "react";
import "./MenuStripe.css";

export const LeftSubmenu = ({ children }) => {
  return <div className="LeftSubmenu">{children}</div>;
};

export const RightSubmenu = ({ children }) => {
  return <div className="RightSubmenu">{children}</div>;
};

const MenuStripe = ({ children }) => {
  return <div className="MenuStripe">{children}</div>;
};

export default MenuStripe;
