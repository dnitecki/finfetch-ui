import React from "react";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>Landing Page</div>
      <NavLink to="dashboard">Dashboard</NavLink>&nbsp;
      <NavLink to="api">API</NavLink>
    </div>
  );
}
