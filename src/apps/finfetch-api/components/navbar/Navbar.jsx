import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import icon from "../../../../assets/FinFetch-icon-small.png";

export default function Navbar() {
  return (
    <div className="api-navbar">
      <div className="api-navbar-container">
        <div className="api-navbar-icon">
          <NavLink to="/">
            <img
              className="api-navbar-finfetch-icon"
              src={icon}
              alt="FinFetch.io"
            />
          </NavLink>
        </div>
        <div className="api-navbar-links">
          <NavLink to="register">
            <div className="api-register-button">Register</div>
          </NavLink>
          <NavLink to="login">
            <div className="api-login-button">Sign In</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
