import React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  sampleJsRequest,
  sampleNodeJsRequest,
  samplePythonRequest,
} from "../../pages/documentation/StockResponses";
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
            Python - Requests
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            JavaScript - Fetch
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
            <SyntaxHighlighter
              useInlineStyles={true}
              className="request-syntax-highlighter"
              language="python"
              style={coy}
            >
              {samplePythonRequest}
            </SyntaxHighlighter>
          </div>

          <div
            className={
              toggleState === 2
                ? "tabs-content  active-content"
                : "tabs-content"
            }
          >
            <SyntaxHighlighter
              useInlineStyles={true}
              className="request-syntax-highlighter"
              language="javascript"
              style={coy}
            >
              {sampleJsRequest}
            </SyntaxHighlighter>
          </div>

          <div
            className={
              toggleState === 3
                ? "tabs-content  active-content"
                : "tabs-content"
            }
          >
            <SyntaxHighlighter
              useInlineStyles={true}
              className="request-syntax-highlighter"
              language="javascript"
              style={coy}
            >
              {sampleNodeJsRequest}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
}
