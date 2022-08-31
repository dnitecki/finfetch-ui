import React, { useState } from "react";
import "./StockPrice.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { getStockPrice } from "../../../../requests/Requests";
import icon from "../../../../assets/FinFetch-letter.png";

export default function StockPrice() {
  const [key, setKey] = useState("");
  const [ticker, setTicker] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await getStockPrice(key, ticker, start, end);
      setData(JSON.stringify(result));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      let text = error.request.response;
      if (!error?.response) {
        setData("No Server Response");
      } else if (error.response?.status === 500) {
        setData("Invalid Parameters");
      } else if (error.response?.status === 403) {
        setData("Invalid or Missing API Key");
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
            <label className="form-label tryitout-label" htmlFor="key">
              API Key (required)
            </label>
            <input
              className="form-input tryitout-input"
              type="text"
              id="key"
              placeholder="API Key"
              onChange={(e) => setKey(e.target.value)}
            />
            <label className="form-label tryitout-label" htmlFor="ticker">
              Ticker Symbol (required)
            </label>
            <input
              className="form-input tryitout-input"
              type="text"
              id="ticker"
              placeholder="example: INTC"
              onChange={(e) => setTicker(e.target.value)}
            />
            <label className="form-label tryitout-label" htmlFor="start">
              Start Date (required)
            </label>
            <input
              className="form-input tryitout-input"
              type="text"
              id="start"
              placeholder="format: yyyy-mm-dd"
              onChange={(e) => setStart(e.target.value)}
            />
            <label className="form-label tryitout-label" htmlFor="end">
              End Date (required)
            </label>
            <input
              className="form-input tryitout-input"
              type="text"
              id="end"
              placeholder="format: yyyy-mm-dd"
              onChange={(e) => setEnd(e.target.value)}
            />
            <button
              className="form-button tryitout-button"
              disabled={!ticker || !start || !end}
            >
              Send Request
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
        <div className="documentation-tryitout-results">
          <div className="documentation-code-header">API response</div>
          {isloading ? (
            <div className="tryitout-response tryitout-center">
              <div className="tryitout-loading-container">
                <span class="loading-spinner"></span>
                <img
                  className="tryitout-loading-icon"
                  src={icon}
                  alt="FinFetch.io"
                />
              </div>
            </div>
          ) : (
            <div className="tryitout-response">{data}</div>
          )}
        </div>
      </div>
    </>
  );
}
