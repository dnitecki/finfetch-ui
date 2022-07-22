import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";
import StockTicker from "../../components/stockTicker/StockTicker";
import icon from "../../assets/FinFetch-icon.png";
import iconText from "../../assets/FinFetch-icon-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const changeBgDashboard = () => {
  document.getElementById("landingPage").style.background = "#5C4EB3";
  document.getElementById("landingPage-main").style.display = "none";
  document.getElementById("landingPage-api").style.display = "none";
  document.getElementById("landingPage-dashboard").style.display = "flex";
};
const changeBgApi = () => {
  document.getElementById("landingPage").style.background = "#0982CC";
  document.getElementById("landingPage-main").style.display = "none";
  document.getElementById("landingPage-dashboard").style.display = "none";
  document.getElementById("landingPage-api").style.display = "flex";
};
const resetBg = () => {
  document.getElementById("landingPage").style.background = "#0b335b";
  document.getElementById("landingPage-api").style.display = "none";
  document.getElementById("landingPage-dashboard").style.display = "none";
  document.getElementById("landingPage-main").style.display = "flex";
};
export default function LandingPage() {
  return (
    <div id="landingPage" className="landingPage">
      <div className="bg-animation">
        <div className="bg-layer-1"></div>
        <div className="bg-layer-2"></div>
      </div>
      <StockTicker />
      <div className="landingPage-container">
        <div className="landingPage-text">
          <div id="landingPage-main">
            <div className="landingPage-icon-container">
              <img
                className="landingPage-finfetch-icon"
                src={icon}
                alt="FinFetch.io"
              />
            </div>
            <div>
              <img
                className="landingPage-finfetch-text"
                src={iconText}
                alt="FinFetch.io"
              />
            </div>
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
          <div className="landingPage-card-container" onMouseLeave={resetBg}>
            <NavLink to="dashboard/overview" onMouseOver={changeBgDashboard}>
              <div className="landingPage-card">
                <div className="landingPage-circle">
                  <div className="landingPage-app-name">
                    Stock Analyzer <div>Tool</div>
                  </div>
                </div>
                <div className="landingPage-card-content">
                  <div className="landingPage-card-button-dashboard">
                    Launch
                    <FontAwesomeIcon icon={faArrowRightLong} />
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
                    Get Access
                    <FontAwesomeIcon icon={faArrowRightLong} />
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
