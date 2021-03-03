import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeButton, NavStyled, Logo } from "../styles";
import lightLogo from "../images/logo.png";
import darkLogo from "../images/logo.png";
import styled from "styled-components";

const ThemeButton2 = styled.button`
  background: blue;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img
          src={props.currentTheme === "Light" ? lightLogo : darkLogo}
          alt="logo"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink to="/Product" style={{ padding: 10 }}>
            <ThemeButton2>Products</ThemeButton2>
          </NavLink>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "Light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
