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
          <NavLink to="/" activeStyle className={"Logo"}>
            Finance Vote
          </NavLink>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/rules" activeStyle>
            Rules
          </NavLink>
        </NavMenu>
        <NavLink to="/" activeStyle className={"Logo Name"}>
          Masser
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
