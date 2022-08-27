import React from "react";
import "./Documentation.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { NavLink } from "react-router-dom";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Helmet } from "react-helmet";
import { stockPrice, stockInfo, stockNews } from "./StockResponses";
import key from "../../../../assets/Key-icon.png";
import logo from "../../../../assets/FinFetch-icon-text-secondary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Documentation() {
  return (
    <div className="documentation">
      <Helmet>
        <title>FinFetch | API Docs</title>
      </Helmet>
      <div className="documentation-container">
        <div className="documentation-top">
          <a href="#page-top" className="top-button">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
        <div className="documentation-sidebar">
          <div className="documentation-header"></div>
          <div className="documentation-sidebar-container">
            <div className="documentation-nav-logo-wrapper">
              <img
                className="documentation-nav-logo"
                src={logo}
                alt="FinFetch.io"
              ></img>
            </div>
            <div className="documentation-nav">
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
        </div>
        <div className="documentation-content-container">
          <div className="documentation-header"></div>
          <div className="documentation-content-container-scroll">
            <div id="page-top" className="documentation-register">
              <div className="documentation-register-header">
                FinFetch <strong>Stock API</strong>
              </div>
              <div className="documentation-register-text">
                <div>A truly democratized stock data RESTful API.</div>
                <div>
                  Access real-time financial data to power your projects for
                  <strong>
                    &nbsp;<u>FREE.</u>
                  </strong>
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
              <div id="stock-price" className="documentation-content">
                <div className="documentation-content-top">
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
                <div className="documentation-content-bottom">
                  <div className="documentation-tryitout-header">
                    Try It Out
                  </div>
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
                      <div className="documentation-code-header">
                        JSON response
                      </div>
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
                </div>
              </div>
              <div id="stock-info" className="documentation-content">
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
              <div id="stock-news" className="documentation-content">
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
