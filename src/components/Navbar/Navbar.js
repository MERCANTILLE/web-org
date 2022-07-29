import React from "react";
import "./Navbar.css";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" className={"Logo"}>
            Finance Vote
          </NavLink>
          <NavLink to="/">Feed</NavLink>
          <NavLink to="/actions" activeStyle>
            Actions
          </NavLink>
          <NavLink to="/members">Members</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </NavMenu>
        <NavLink to="/" activeStyle className={"Logo Name"}>
          Masser
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
