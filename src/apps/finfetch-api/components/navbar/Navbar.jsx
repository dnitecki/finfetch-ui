import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="api-navbar">
      <div className="api-navbar-container">
        <div className="api-navbar-icon">
          <img
            className="api-navbar-finfetch-icon"
            src="./assets/finfetch-icon.png"
            alt="FinFetch.io"
          />
        </div>
        <div className="api-navbar-links">
          <NavLink to="register">
            <div className="api-register-button">Register</div>
          </NavLink>
          <NavLink to="login">
            <div className="api-login-button">Login</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
