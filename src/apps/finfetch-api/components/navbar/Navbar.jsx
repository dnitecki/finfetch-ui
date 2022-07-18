import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="api-navbar">
      <div className="api-navbar-container">
        <div className="api-navbar-icon">
          <img
            className="api-navbar-finfetch-icon"
            src="./assets/finfetch-icon.png"
            alt="FinFetch.io"
          />
        </div>
        <div className="api-navbar-links"></div>
      </div>
    </div>
  );
}
