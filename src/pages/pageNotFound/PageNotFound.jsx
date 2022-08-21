import React from "react";
import "./PageNotFound.scss";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <Helmet>
        <title>FinFetch | Page Not Found</title>
      </Helmet>
      <div className="bg-animation">
        <div className="bg-layer-3"></div>
        <div className="bg-layer-4"></div>
      </div>
      <div className="pageNotFound-container">
        <div className="pageNotFound-header">404 :(</div>
        <div className="pageNotFound-subHeader">Page not found.</div>
        <div className="pageNotFound-text">
          You've wandered off too far or I've broken something.
        </div>
        <div className="pageNotFound-text">
          Either way, let's pretend this never happened...
        </div>
        <div className="pageNotFound-buttons">
          <NavLink to="/">
            <button className="pageNotFound-button">Home</button>
          </NavLink>
          <NavLink to="/api/docs">
            <button className="pageNotFound-button">API Docs</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
