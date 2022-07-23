import React from "react";
import "./Documentation.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Documentation() {
  return (
    <div className="documentation">
      <div className="documentation-container">
        <div className="documentation-sidebar"></div>
        <div className="documentation-content-container">
          <div className="documentation-header"></div>
          <div className="documentation-content-header">API Documentation</div>
          <div className="documentation-content">
            <div className="documentation-text">Sample Api Call</div>
            <div className="documentation-code">
              <SyntaxHighlighter
                className="syntax-highlighter"
                language="json"
                style={coy}
              >
                'akjfakjfhkajfhak'
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="documentation-content">
            <div className="documentation-text">Sample Api Call</div>
            <div className="documentation-code">
              <SyntaxHighlighter
                className="syntax-highlighter"
                language="javascript"
                style={coy}
              >
                'akjfakjfhkajfhak'
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="documentation-content">
            <div className="documentation-text">Sample Api Call</div>
            <div className="documentation-code">
              <SyntaxHighlighter
                className="syntax-highlighter"
                language="javascript"
                style={coy}
              >
                'akjfakjfhkajfhak'
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
