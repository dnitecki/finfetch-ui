import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";
import StockTicker from "../../components/stockTicker/StockTicker";

const changeBgDashboard = () => {
  document.getElementById("landingPage").style.background = "#5C4EB3";
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
// const resetBg = () => {
//   document.getElementById("landingPage").style.background = "#e9e9e9";
//   document.getElementById("landingPage-api").style.display = "none";
//   document.getElementById("landingPage-dashboard").style.display = "none";
//   document.getElementById("landingPage-main").style.display = "flex";
// };
export default function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      <StockTicker />
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
          <div className="landingPage-card-container">
            <NavLink
              to="dashboard/overview"
              onMouseOver={changeBgDashboard}
              // onMouseLeave={resetBg}
            >
              <div className="landingPage-card">
                <div className="landingPage-circle">
                  <div className="landingPage-app-name">
                    Stock Analyzer <div>App</div>
                  </div>
                </div>
                <div className="landingPage-card-content">
                  <div className="landingPage-card-button-dashboard">
                    Open
                    <span class="material-symbols-rounded">
                      arrow_right_alt
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="api" onMouseOver={changeBgApi}>
              <div className="landingPage-card">
                <div className="landingPage-circle">
                  <div className="landingPage-app-name">
                    Financial Data<div>API</div>
                  </div>
                </div>
                <div className="landingPage-card-content">
                  <div className="landingPage-card-button-api">
                    Open
                    <span class="material-symbols-rounded">
                      arrow_right_alt
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
