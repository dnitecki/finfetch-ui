import React, { useContext } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import icon from "../../../../assets/FinFetch-icon.png";
import axios from "axios";
import UserContext from "../../../../context/Context";
const LOGOUT_URL = "http://127.0.0.1:8000/api/logout/";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  const logOut = async () => {
    const response = await axios.post(LOGOUT_URL, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
      },
      withCredentials: true,
    });
    console.log(response?.data);
    navigate("", { state: { from: location }, replace: true });
    setLoginStatus(false);
  };

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
        {loginStatus ? (
          <div className="api-navbar-links">
            <NavLink to="docs">
              <div className="api-nav-button">API Docs</div>
            </NavLink>
            <NavLink to="account">
              <div className="api-nav-button">Account</div>
            </NavLink>
            <div className="api-logout-button" onClick={logOut}>
              Log Out
            </div>
          </div>
        ) : (
          <div className="api-navbar-links">
            <NavLink to="docs">
              <div className="api-nav-button">API Docs</div>
            </NavLink>
            <NavLink to="register">
              <div className="api-nav-button">Register</div>
            </NavLink>
            <NavLink to="login">
              <div className="api-nav-button">Sign In</div>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
