import React from "react";
import "./Documentation.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { NavLink } from "react-router-dom";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Helmet } from "react-helmet";
import { stockPrice, stockInfo, stockNews } from "./StockResponses";
import key from "../../../../assets/Key-icon.png";

export default function Documentation() {
  return (
    <div className="documentation">
      <Helmet>
        <title>FinFetch | API Docs</title>
      </Helmet>
      <div className="documentation-container">
        <div className="documentation-sidebar">
          <div className="documentation-header"></div>
          <div className="documentation-sidebar-container">
            Sidebar Navigation
          </div>
        </div>
        <div className="documentation-content-container">
          <div className="documentation-header"></div>
          <div className="documentation-content-container-scroll">
            <div className="documentation-register">
              <div className="documentation-register-header">
                FinFetch Stock API
              </div>
              <div className="documentation-register-text">
                <div>A truly democratized stock data RESTful API.</div>
                <div>
                  Access real-time financial data to power your projects for
                  <strong>&nbsp;FREE.</strong>
                </div>
              </div>
              <div className="documentation-register-button">
                <div id="register-button-container">
                  <NavLink to="/api/register">
                    <button className="register-button">
                      Get free API key
                    </button>
                  </NavLink>
                </div>
                <div id="documentation-register-icon">
                  <img className="key-icon" src={key} alt="FinFetch.io" />
                </div>
              </div>
            </div>
            <div className="documentation-content-wrapper">
              <div className="documentation-content-header">
                API Documentation
              </div>
              <div className="documentation-content">
                <div className="documentation-text">
                  <div className="documentation-content-header-text">
                    Stock Price <div className="request-type-get">GET</div>
                  </div>
                </div>
                <div className="documentation-code">
                  <div className="documentation-code-header">
                    Sample JSON response
                  </div>
                  <SyntaxHighlighter
                    useInlineStyles={true}
                    className="syntax-highlighter"
                    language="json"
                    style={coy}
                  >
                    {stockPrice}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="documentation-content">
                <div className="documentation-text">
                  <div className="documentation-content-header-text">
                    Stock Info <div className="request-type-get">GET</div>
                  </div>
                </div>
                <div className="documentation-code">
                  <div className="documentation-code-header">
                    Sample JSON response
                  </div>
                  <SyntaxHighlighter
                    useInlineStyles={true}
                    className="syntax-highlighter"
                    language="json"
                    style={coy}
                  >
                    {stockInfo}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="documentation-content">
                <div className="documentation-text">
                  <div className="documentation-content-header-text">
                    Stock News <div className="request-type-get">GET</div>
                  </div>
                </div>
                <div className="documentation-code">
                  <div className="documentation-code-header">
                    Sample JSON response
                  </div>
                  <SyntaxHighlighter
                    useInlineStyles={true}
                    className="syntax-highlighter"
                    language="json"
                    style={coy}
                  >
                    {stockNews}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
