import React from "react";
import "./Documentation.scss";
import StockPrice from "../../components/stockPrice/StockPrice";
import StockInfo from "../../components/stockInfo/StockInfo";
import StockNews from "../../components/stockNews/StockNews";
import Sidebar from "../../components/sidebar/Sidebar";
import Dropdown from "../../components/dropdown/Dropdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { NavLink } from "react-router-dom";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Helmet } from "react-helmet";
import {
  stockPrice,
  stockInfo,
  stockNews,
  requestHeader,
  baseUrl,
} from "./StockResponses";
import key from "../../../../assets/Key-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faFingerprint,
  faRocket,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import Tabs from "../../components/tabs/Tabs";

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
          <Sidebar />
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
              <div id="gettingStarted" className="documentation-content">
                <div className="documentation-instructions-text">
                  <div className="documentation-content-header-text">
                    Getting Started <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <div className="documentation-content-text">
                    FinFetch Stock API has predictable resource-oriented URLs,
                    accepts form-encoded request bodies, returns JSON-encoded
                    responses, and uses standard HTTP response codes and
                    authentication.
                  </div>
                  <div className="documentation-content-text">
                    <span>
                      <strong>Base URL: </strong>
                      <span className="documentation-api-header-example">
                        {baseUrl}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div id="authentication" className="documentation-content">
                <div className="documentation-instructions-text">
                  <div className="documentation-content-header-text">
                    Authentication <FontAwesomeIcon icon={faFingerprint} />
                  </div>
                  <div className="documentation-content-text">
                    <span>
                      All requests <strong>require</strong> an API token in the
                      request header.
                    </span>
                  </div>
                  <span>
                    <strong>Header: </strong>
                    <span className="documentation-api-header-example">
                      {requestHeader}
                    </span>
                  </span>
                  <div className="documentation-content-text">
                    <span>
                      To access your API Key,{" "}
                      <span>
                        <NavLink to="/api/signin">
                          <span className="page-link">Sign In</span>
                        </NavLink>
                      </span>{" "}
                      and go to the account page. If you're a new user, an API
                      Key is assigned to you upon{" "}
                      <span>
                        <NavLink to="/api/register">
                          <span className="page-link">Registration</span>
                        </NavLink>
                      </span>
                      .
                    </span>
                  </div>
                </div>
              </div>
              <div id="sampleRequest" className="documentation-content">
                <div className="documentation-content-header-text">
                  Sample Requests <FontAwesomeIcon icon={faCode} />
                </div>
                <Tabs />
              </div>
              <div id="stock-price" className="documentation-content">
                <div className="documentation-content-top">
                  <div className="documentation-text">
                    <div className="documentation-content-header-text">
                      Stock Price <span className="request-type-get">GET</span>
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
                  <Dropdown tryItOut={<StockPrice />} />
                </div>
              </div>
              <div id="stock-info" className="documentation-content">
                <div className="documentation-content-top">
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
                <div className="documentation-content-bottom">
                  <Dropdown tryItOut={<StockInfo />} />
                </div>
              </div>
              <div id="stock-news" className="documentation-content">
                <div className="documentation-content-top">
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
                <div className="documentation-content-bottom">
                  <Dropdown tryItOut={<StockNews />} />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
