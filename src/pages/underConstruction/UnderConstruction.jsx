import React, { useEffect } from "react";
import "./UnderConstruction.scss";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstruction() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        } else {
          entry.target.classList.remove("reveal");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
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
          <div className="underConstruction-icon hidden">
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
          <div className="underConstruction-header hidden">
            Under Construction
          </div>
          <div className="underConstruction-text hidden">
            The <strong>Stock Analyzer Tool</strong> is currently under
            construction. I'm excited to show this to the world and it'll be on
            FinFetch as soon as it's ready.
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
