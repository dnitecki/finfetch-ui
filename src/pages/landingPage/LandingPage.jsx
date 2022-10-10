import React, { useState } from "react";
import "./LandingPage.scss";
import { useNavigate, useLocation } from "react-router-dom";
import StockTicker from "../../components/stockTicker/StockTicker";
import icon from "../../assets/FinFetch-icon.png";
import iconText from "../../assets/FinFetch-text-animation.png";
import iconTextFull from "../../assets/FinFetch-icon-text.png";
import letter from "../../assets/FinFetch-letter-primary.png";
import apiIcon from "../../assets/API-icon.png";
import apiIcon2 from "../../assets/API-icon-alternate.png";
import dashIcon from "../../assets/Dashboard-icon.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const dragDashboard = () => {
  document.getElementById("button-api").style.zIndex = 1;
  document.getElementById("button-dashboard").style.zIndex = 1000;
};
const dragApi = () => {
  document.getElementById("button-dashboard").style.zIndex = 1;
  document.getElementById("button-api").style.zIndex = 1000;
};

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
  const [dashboardNavigate, setDashboardNavigate] = useState(false);

  const apiClick = () => {
    setApiNavigate(true);
    setTimeout(() => {
      setApiNavigate(false);
      navigate("/api/docs", { state: { from: location }, replace: true });
    }, 1500);
  };
  const dashClick = () => {
    setDashboardNavigate(true);
    setTimeout(() => {
      setDashboardNavigate(false);
      navigate("/dashboard/", { state: { from: location }, replace: true });
    }, 1500);
  };

  return (
    <div id="landingPage" className="landingPage">
      <Helmet>
        <title>FinFetch | Democratize Financial Data</title>
      </Helmet>
      {apiNavigate ? (
        <div className="landingPage-api-screen screen-on">
          <img
            className="landingPage-screen-icon"
            src={apiIcon2}
            alt="FinFetch"
          />
        </div>
      ) : (
        <div className="landingPage-api-screen screen-off"></div>
      )}
      {dashboardNavigate ? (
        <div className="landingPage-dash-screen screen-on">
          <img
            className="landingPage-screen-icon"
            src={dashIcon}
            alt="FinFetch"
          />
        </div>
      ) : (
        <div className="landingPage-dash-screen screen-off"></div>
      )}
      <div className="bg-animation">
        <div className="bg-layer-1"></div>
        <div className="bg-layer-2"></div>
      </div>
      <StockTicker />
      <div className="landingPage-container">
        <div className="landingPage-text">
          <div className="landingPage-mobile">
            <div className="landingPage-logo-container">
              <img
                className="landingPage-finfetch-letter"
                src={letter}
                alt="FinFetch Letter Icon"
              />
              <img
                className="landingPage-finfetch-text"
                src={iconText}
                alt="FinFetch"
              />
            </div>
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
                alt="FinFetch"
              />
            </div>
            <div className="landingPage-logo-container">
              <img
                className="landingPage-finfetch-text"
                src={iconTextFull}
                alt="FinFetch"
              />
            </div>
          </div>
          <div id="landingPage-dashboard">
            <img
              className="landingPage-icon"
              src="./assets/dashboard-image.png"
              alt="FinFetch"
            />
          </div>
          <div id="landingPage-api">
            <img
              className="landingPage-icon"
              src="./assets/api-image.png"
              alt="FinFetch"
            />
          </div>
        </div>
        <div className="landingPage-apps">
          <div className="landingPage-card-container" onMouseLeave={resetBg}>
            <motion.button
              onDrag={dragDashboard}
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              className="landingPage-button app-reveal-1"
              id="button-dashboard"
              onClick={dashClick}
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
            </motion.button>
            <motion.button
              onDrag={dragApi}
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              className="landingPage-button app-reveal-2"
              id="button-api"
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
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
