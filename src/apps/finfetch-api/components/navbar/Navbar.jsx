import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import icon from "../../../../assets/FinFetch-icon.png";
import UserContext from "../../../../context/Context";
import { logoutUser } from "../../../../requests/Requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [logout, setLogout] = useState(false);
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  const logoutClick = async () => {
    try {
      await logoutUser();
      navigate("/api/docs", { state: { from: location }, replace: true });
      setLoginStatus(false);
      setLogout(true);
      setTimeout(() => {
        setLogout(false);
      }, 2000);
    } catch (error) {
      setLoginStatus(true);
      setLogout(false);
    }
  };

  return (
    <div className="api-navbar">
      <div className="api-navbar-container">
        <div className="api-navbar-icon">
          <NavLink to="/">
            <div className="api-navbar-icon-container">
              <img
                className="api-navbar-finfetch-icon"
                src={icon}
                alt="FinFetch.io"
              />
            </div>
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
            <div className="api-logout-button" onClick={logoutClick}>
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
            <NavLink to="signin">
              <div className="api-nav-button">Sign In</div>
            </NavLink>
          </div>
        )}
      </div>
      <div
        className={
          logout
            ? "api-logout-success success-on"
            : "api-logout-success success-off"
        }
      >
        <FontAwesomeIcon icon={faCheck} />
        <div className="success-text">Successfully logged out</div>
      </div>
    </div>
  );
}
