import React from "react";
import "./Footer.scss";
import logo from "../../../../assets/FinFetch-icon-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo-container">
              <img className="footer-logo" src={logo} alt="FinFetch.io"></img>
              <div className="footer-text">Copyright © 2022 FinFetch Inc.</div>
            </div>
            <div className="footer-policies">
              <NavLink className="footer-link" to="/api/privacy-policy">
                <div className="footer-text-links">Privacy Policy</div>
              </NavLink>
              <div className="footer-text-links">Legal Stuff</div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-aboutme">
              <div className="footer-text"></div>
              <div className="footer-socials">
                <a
                  className="footer-link"
                  href="https://www.linkedin.com/in/dnitecki/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  className="footer-link"
                  href="https://github.com/dnitecki"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
