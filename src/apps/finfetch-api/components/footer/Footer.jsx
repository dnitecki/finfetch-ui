import React from "react";
import "./Footer.scss";
import logo from "../../../../assets/FinFetch-icon-text.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo-container">
              <img className="footer-logo" src={logo} alt="FinFetch.io"></img>
              <div className="footer-text">
                Copyright © 2022 FinFetch.io, Inc.
              </div>
            </div>
            <div className="footer-policies">
              <div className="footer-text-links">Privacy Policy</div>
              <div className="footer-text-links">Legal Stuff</div>
            </div>
          </div>
          <div className="footer-right"></div>
        </div>
      </div>
    </>
  );
}
