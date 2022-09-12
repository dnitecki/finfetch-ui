import React from "react";
import { useState } from "react";
import "./Tabs.scss";

export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="tabs-container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Python
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            JavaScript
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            NodeJS - Axios
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1
                ? "tabs-content  active-content"
                : "tabs-content"
            }
          >
            python
          </div>

          <div
            className={
              toggleState === 2
                ? "tabs-content  active-content"
                : "tabs-content"
            }
          >
            JS
          </div>

          <div
            className={
              toggleState === 3
                ? "tabs-content  active-content"
                : "tabs-content"
            }
          >
            NodeJS
          </div>
        </div>
      </div>
    </>
  );
}
