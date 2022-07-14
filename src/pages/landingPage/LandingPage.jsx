import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";

const changeBgDashboard = () => {
  document.getElementById("landingPage").style.background =
    "rgba(9, 32, 63, 1)";
};
const changeBgApi = () => {
  document.getElementById("landingPage").style.background = "green";
};
const resetBg = () => {
  document.getElementById("landingPage").style.background = "#91a3b0";
};
export default function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      <div className="landingPage-container">
        <div className="landingPage-text">
          <img
            className="landingPage-icon"
            src="./assets/finfetch-icon.png"
            alt="FinFetch.io"
          />
          <div className="landingPage-name">FinFetch.io</div>
        </div>
        <div className="landingPage-apps">
          <NavLink
            to="dashboard/overview"
            onMouseOver={changeBgDashboard}
            onMouseLeave={resetBg}
          >
            <div className="landingPage-card">Dashboard </div>
          </NavLink>
          <NavLink to="api" onMouseOver={changeBgApi} onMouseLeave={resetBg}>
            <div className="landingPage-card">API </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
