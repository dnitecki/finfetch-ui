import React, { useState } from "react";
import "./LandingPage.scss";
import { useNavigate, useLocation } from "react-router-dom";
import StockTicker from "../../components/stockTicker/StockTicker";
import icon from "../../assets/FinFetch-icon.png";
import iconText from "../../assets/FinFetch-icon-text.png";
import apiIcon from "../../assets/API-icon.png";
import apiIcon2 from "../../assets/API-icon-alternate.png";
import dashIcon from "../../assets/Dashboard-icon.png";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const changeBgDashboard = () => {
  if (window.screen.width > 600) {
    document.getElementById("landingPage").style.background = "#5C4EB3";
    document.getElementById("landingPage-main").style.display = "none";
    document.getElementById("landingPage-api").style.display = "none";
    document.getElementById("landingPage-dashboard").style.display = "flex";
  }
};
const changeBgApi = () => {
  if (window.screen.width > 600) {
    document.getElementById("landingPage").style.background = "#0982cc";
    document.getElementById("landingPage-main").style.display = "none";
    document.getElementById("landingPage-dashboard").style.display = "none";
    document.getElementById("landingPage-api").style.display = "flex";
  }
};
const resetBg = () => {
  if (window.screen.width > 600) {
    document.getElementById("landingPage").style.background = "#0b335b";
    document.getElementById("landingPage-api").style.display = "none";
    document.getElementById("landingPage-dashboard").style.display = "none";
    document.getElementById("landingPage-main").style.display = "flex";
  }
};
export default function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiNavigate, setApiNavigate] = useState(false);

  const apiClick = () => {
    setApiNavigate(true);
    setTimeout(() => {
      setApiNavigate(false);
      navigate("/api/docs", { state: { from: location }, replace: true });
    }, 1500);
  };

  return (
    <div id="landingPage" className="landingPage">
      <Helmet>
        <title>FinFetch</title>
      </Helmet>
      {apiNavigate ? (
        <div className="landingPage-api-screen screen-on">
          <img
            className="landingPage-screen-icon-api"
            src={apiIcon2}
            alt="FinFetch.io"
          />
        </div>
      ) : (
        <div className="landingPage-api-screen screen-off"></div>
      )}
      <div className="bg-animation">
        <div className="bg-layer-1"></div>
        <div className="bg-layer-2"></div>
      </div>
      <StockTicker />
      <div className="landingPage-container">
        <div className="landingPage-text">
          <div className="landingPage-mobile">
            <img
              className="landingPage-finfetch-text"
              src={iconText}
              alt="FinFetch.io"
            />
            <div className="landingPage-mobile-text">
              Select Application
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
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
            <button
              className="landingPage-button app-reveal-1"
              onClick={apiClick}
              onMouseOver={changeBgDashboard}
            >
              <div className="landingPage-card landingPage-app-dashboard ">
                <div className="landingPage-construction">
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                  Under Construction
                  <FontAwesomeIcon icon={faTriangleExclamation} />
                </div>
                <div className="landingPage-circle-dash">
                  <div className="landingPage-app-name">
                    Stock Analyzer
                    <div>
                      <div className="landingPage-bold">Tool</div>
                    </div>
                  </div>
                </div>
                <div className="landingPage-card-content">
                  <div className="landingPage-card-icon">
                    <img
                      className="landingPage-card-icon-dash"
                      src={dashIcon}
                      alt="FinFetch.io"
                    />
                  </div>
                  <div className="landingPage-card-button">
                    <div className="landingPage-card-button-dashboard">
                      Launch
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="landingPage-button app-reveal-2"
              onClick={apiClick}
              onMouseOver={changeBgApi}
            >
              <div className="landingPage-card landingPage-app-api">
                <div className="landingPage-circle-api">
                  <div className="landingPage-app-name">
                    Financial Data <div className="landingPage-bold">API</div>
                  </div>
                </div>
                <div className="landingPage-card-content">
                  <div className="landingPage-card-icon">
                    <img
                      className="landingPage-card-icon-api"
                      src={apiIcon}
                      alt="FinFetch.io"
                    />
                  </div>
                  <div className="landingPage-card-button">
                    <div className="landingPage-card-button-api">
                      Get Access
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
