import React from "react";
import "./StockPrice.scss";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { getStockPrice } from "../../../../requests/Requests";
import { useState } from "react";

export default function StockPrice() {
  const [ticker, setTicker] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getStockPrice(ticker, start, end);
      setData(JSON.stringify(result));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      let text = error.request.response;
      if (!error?.response) {
        setData("No Server Response");
      } else if (error.response?.status === 500) {
        setData("Invalid Parameters");
      } else {
        setData(text.substring(1, text.length - 1));
      }
    }
  };
  return (
    <>
      <div className="documentation-tryitout-content">
        <div className="documentation-tryitout-form">
          <form className="tryitout-form" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="ticker">
              Ticker Symbol (required)
            </label>
            <input
              className="form-input tryitout-border"
              type="text"
              id="ticker"
              placeholder="example: INTC"
              onChange={(e) => setTicker(e.target.value)}
            />
            <label className="form-label" htmlFor="start">
              Start Date (required)
            </label>
            <input
              className="form-input tryitout-border"
              type="text"
              id="start"
              placeholder="format: yyyy-mm-dd"
              onChange={(e) => setStart(e.target.value)}
            />
            <label className="form-label" htmlFor="end">
              End Date (required)
            </label>
            <input
              className="form-input tryitout-border"
              type="text"
              id="end"
              placeholder="format: yyyy-mm-dd"
              onChange={(e) => setEnd(e.target.value)}
            />
            <button className="form-button tryitout-button">
              Send Request
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
        <div className="documentation-tryitout-results">
          <div className="documentation-code-header">JSON response</div>
          {/* <SyntaxHighlighter
            useInlineStyles={true}
            className="syntax-highlighter tryitout-border"
            language="json"
            style={coy}
          >
            {data}
          </SyntaxHighlighter> */}
          <div className="syntax-highlighter tryitout-border">{data}</div>
        </div>
      </div>
    </>
  );
}
