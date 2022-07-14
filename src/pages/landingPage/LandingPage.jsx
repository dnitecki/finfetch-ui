import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage-container">
        <div className="landingPage-apps">
          <NavLink to="dashboard/overview">
            <div className="landingPage-card">Dashboard </div>
          </NavLink>
          <NavLink to="api">
            <div className="landingPage-card">API </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
