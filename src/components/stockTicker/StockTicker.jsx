import React, { useEffect, useState } from "react";

// CSS
import "./StockTicker.scss";

// Fetch and set companies object FN
const fetchCompaniesObj = () => {
  // Fetch companies object
  var companiesObj = require("./mockStockData.json");

  // Result
  var result = [];

  // Set companies object
  companiesObj.forEach((company, i) => {
    // Update properties
    company.name = company.name.toUpperCase();
    company.symbol = company.symbol.toUpperCase();

    // Add percentage property
    var percentage = ((company.old - company.current) / company.current) * 100;
    company.percentage = percentage.toFixed(2);

    // End
    if (companiesObj.length === i + 1) {
      result = companiesObj;
    }
  });

  return result;
};

// COMPANIES TICKER MODULE
const CompaniesTicker = ({ companies }) => {
  // If companies object is existing
  if (companies.length !== 0) {
    // Display each company in the ticker
    return (
      <>
        {companies.map((company, i) => (
          <div className="item" id={i} obj={company} key={i}>
            <span>{company.symbol}</span>
            <span>
              {company.current} {company.currency}
            </span>

            {/*Colored percentage*/}
            {company.percentage > 0 ? (
              <span className="company-percentage color-positive">
                + {Math.abs(company.percentage).toFixed(2)} %
              </span>
            ) : null}
            {company.percentage < 0 ? (
              <span className="company-percentage color-negative">
                - {Math.abs(company.percentage).toFixed(2)} %
              </span>
            ) : null}
            {company.percentage === 0 ? (
              <span className="company-percentage color-neutral">
                {Math.abs(company.percentage).toFixed(2)} %
              </span>
            ) : null}
          </div>
        ))}
      </>
    );
  } else {
    return "";
  }
};

// Ticker slider module
const StockTicker = () => {
  // States
  const [companies, setCompanies] = useState([]);

  // Side effects
  useEffect(() => {
    // Set
    setCompanies(fetchCompaniesObj());
  }, []);

  return (
    <>
      {/* Ticker slider */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          <div className="item-collection-1">
            <CompaniesTicker companies={companies} />
          </div>
          <div className="item-collection-2">
            <CompaniesTicker companies={companies} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StockTicker;
