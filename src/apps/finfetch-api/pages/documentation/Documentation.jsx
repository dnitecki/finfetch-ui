import React from "react";
import "./Documentation.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { stockPrice, stockInfo, stockNews } from "./StockResponses";

export default function Documentation() {
  return (
    <div className="documentation">
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
            <div className="documentation-content-header">
              API Documentation
            </div>
            <div className="documentation-content">
              <div className="documentation-text">Stock Price</div>
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
              <div className="documentation-text">Stock Info</div>
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
              <div className="documentation-text">Stock News</div>
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
  );
}
