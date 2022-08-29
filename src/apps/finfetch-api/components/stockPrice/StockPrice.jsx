import React, { useState } from "react";
import "./StockPrice.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { getStockPrice } from "../../../../requests/Requests";
import apiIcon from "../../../../assets/API-icon.png";

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
          {loading ? (
            <div className="tryitout-response tryitout-center">
              <img
                className="tryitout-loading-icon"
                src={apiIcon}
                alt="FinFetch.io"
              />
            </div>
          ) : (
            <div className="tryitout-response">{data}</div>
          )}
        </div>
      </div>
    </>
  );
}
