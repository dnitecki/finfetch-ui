import React from "react";
import "./StockPrice.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StockPrice() {
  return (
    <>
      <div className="documentation-tryitout-header">Try It Out</div>
      <div className="documentation-tryitout-content">
        <div className="documentation-tryitout-form">
          <form className="tryitout-form">
            <label className="form-label" htmlFor="ticker">
              Ticker Symbol (ex. INTC)
            </label>
            <input className="form-input" type="text" id="ticker" />
            <label className="form-label" htmlFor="start">
              Start Date
            </label>
            <input className="form-input" type="text" id="start" />
            <label className="form-label" htmlFor="end">
              End Date
            </label>
            <input className="form-input" type="text" id="end" />
            <button className="form-button tryitout-button">
              Send Request
            </button>
          </form>
        </div>
        <div className="documentation-tryitout-results">
          <div className="documentation-code-header">JSON response</div>
          <SyntaxHighlighter
            useInlineStyles={true}
            className="syntax-highlighter"
            language="json"
            style={coy}
          >
            yo
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}