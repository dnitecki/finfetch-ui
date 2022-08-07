import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import icon from "../../../../assets/FinFetch-icon.png";
import axios from "axios";
const LOGOUT_URL = "http://127.0.0.1:8000/api/logout/";

const logOut = async () => {
  const response = await axios.post(LOGOUT_URL, {
    headers: { "Content-Type": "application/json" },
  });
  console.log(response?.data);
};

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
          <NavLink to="">
            <div className="api-documentation-button">API Docs</div>
          </NavLink>
          <NavLink to="account">
            <div className="api-account-button">Account</div>
          </NavLink>
          <NavLink to="register">
            <div className="api-register-button">Register</div>
          </NavLink>
          <NavLink to="login">
            <div className="api-login-button">Sign In</div>
          </NavLink>
          <div className="api-logout-button" onClick={logOut}>
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
}
