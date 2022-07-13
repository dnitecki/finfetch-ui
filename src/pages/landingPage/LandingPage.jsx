import React from "react";
import "./LandingPage.scss";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage-container">
        <NavLink to="dashboard">Dashboard</NavLink>&nbsp;&nbsp;
        <NavLink to="api">API</NavLink>
      </div>
    </div>
  );
}
