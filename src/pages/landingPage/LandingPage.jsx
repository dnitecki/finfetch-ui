import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";

const changeBgDashboard = () => {
  document.getElementById("landingPage").style.background = "#20124E";
  document.getElementById("landingPage-main").style.display = "none";
  document.getElementById("landingPage-api").style.display = "none";
  document.getElementById("landingPage-dashboard").style.display = "flex";
};
const changeBgApi = () => {
  document.getElementById("landingPage").style.background = "#2170FA";
  document.getElementById("landingPage-main").style.display = "none";
  document.getElementById("landingPage-dashboard").style.display = "none";
  document.getElementById("landingPage-api").style.display = "flex";
};
const resetBg = () => {
  document.getElementById("landingPage").style.background = "#e9e9e9";
  document.getElementById("landingPage-api").style.display = "none";
  document.getElementById("landingPage-dashboard").style.display = "none";
  document.getElementById("landingPage-main").style.display = "flex";
};
export default function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      <div className="landingPage-container">
        <div className="landingPage-text">
          <div id="landingPage-main">
            <img
              className="landingPage-icon"
              src="./assets/landingPage-image.png"
              alt="FinFetch.io"
            />
          </div>
          <div id="landingPage-dashboard">
            <img
              className="landingPage-icon"
              src="./assets/dashboard-image.png"
              alt="FinFetch.io"
            />
          </div>
          <div id="landingPage-api">
            <img
              className="landingPage-icon"
              src="./assets/api-image.png"
              alt="FinFetch.io"
            />
          </div>
        </div>
        <div className="landingPage-apps">
          <NavLink
            to="dashboard/overview"
            onMouseOver={changeBgDashboard}
            // onMouseLeave={resetBg}
          >
            <div className="landingPage-card">
              <div className="landingPage-card-content">Dashboard</div>
            </div>
          </NavLink>
          <NavLink to="api" onMouseOver={changeBgApi}>
            <div className="landingPage-card">
              <div className="landingPage-card-content">API</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
