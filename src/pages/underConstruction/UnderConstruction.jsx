import React from "react";
import "./UnderConstruction.scss";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstruction() {
  return (
    <>
      <div className="underConstruction">
        <Helmet>
          <title>FinFetch | Under Construction</title>
        </Helmet>
        <div className="bg-animation">
          <div className="bg-layer-3"></div>
          <div className="bg-layer-4"></div>
        </div>
        <div className="underConstruction-container">
          <div className="underConstruction-icon">
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
          <div className="underConstruction-header">Under Construction</div>
          <div className="underConstruction-text">
            The <strong>Stock Analyzer Tool</strong> is currently under
            construction. I'm excited to show this to the world and I'll
            announce as soon as it's available.
          </div>
          <div className="underConstruction-buttons">
            <NavLink to="/">
              <button className="underConstruction-button">Home</button>
            </NavLink>
            <NavLink to="/api/docs">
              <button className="underConstruction-button">API Docs</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
