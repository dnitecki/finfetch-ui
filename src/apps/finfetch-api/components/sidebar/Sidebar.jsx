import React from "react";
import logo from "../../../../assets/FinFetch-icon-text-secondary.png";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <>
      {" "}
      <div className="documentation-sidebar-container">
        <div className="documentation-nav-logo-wrapper">
          <img
            className="documentation-nav-logo"
            src={logo}
            alt="FinFetch.io"
          ></img>
        </div>
        <div className="documentation-nav">
          <a href="#authentication">
            <div className="documentation-nav-container">
              <div className="documentation-nav-text">Authentication</div>
            </div>
          </a>
          <a href="#stock-price">
            <div className="documentation-nav-container">
              <div className="documentation-nav-text">Stock Price</div>
              <div className="request-type-get">GET</div>
            </div>
          </a>
          <a href="#stock-info">
            <div className="documentation-nav-container">
              <div className="documentation-nav-text">Stock Info</div>
              <div className="request-type-get">GET</div>
            </div>
          </a>
          <a href="#stock-news">
            <div className="documentation-nav-container">
              <div className="documentation-nav-text">Stock News</div>
              <div className="request-type-get">GET</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
