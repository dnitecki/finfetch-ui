import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="api-navbar">
      <div className="api-navbar-container">
        <div className="api-navbar-icon">
          <NavLink to="/">
            <img
              className="api-navbar-finfetch-icon"
              src="./assets/finfetch-icon.png"
              alt="FinFetch.io"
            />
          </NavLink>
        </div>
        <div className="api-navbar-links">
          <NavLink to="register">
            <div className="api-register-button">Sign Up</div>
          </NavLink>
          <NavLink to="login">
            <div className="api-login-button">Sign In</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
