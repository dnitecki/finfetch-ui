const baseUrl = "http://www.api.finfetch.net/";
export { baseUrl };

const requestHeader = `Authorization: Api-Key <APIKEY>`;
export { requestHeader };

export const samplePythonRequest = `import requests
url = "http://www.api.finfetch.net/api/stock/news?ticker=intc"
payload = ""
headers = {
  'Authorization': ' Api-Key <APIKEY>'
}
response = requests.request("GET", url, headers=headers, data=payload)
print(response.text)`;

export const sampleJsRequest = `var myHeaders = new Headers();
myHeaders.append("Authorization", " Api-Key <APIKEY>");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("http://www.api.finfetch.net/api/stock/news?ticker=intc", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`;

export const sampleNodeJsRequest = `var axios = require('axios');
var data = '';
var config = {
  method: 'get',
  url: 'http://www.api.finfetch.net/api/stock/news?ticker=intc',
  headers: { 
    'Authorization': ' Api-Key <APIKEY>'
  },
  data : data
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
`;
const stockPrice = `{
  "data": {
    "High": [49.900001525878906],
    "Low": [47.33000183105469],
    "Open": [49.83000183105469],
    "Close": [48.11000061035156],
    "Volume": [46598600],
    "Adj Close": [47.732688903808594]
  }
}`;
export { stockPrice };

const stockNews = `{
  "data": [
        {
            "uuid": "24679ea8-a054-3d37-998c-68bd7b8cf5b6",
            "title": "It’s a Bear-Market Rally...",
            "publisher": "Barrons.com",
            "link": "...",
            "providerPublishTime": 1658539140,
            "type": "STORY",
            "thumbnail": {
                "resolutions": [
                    {
                        "url": "...",
                        "width": 1280,
                        "height": 640,
                        "tag": "original"
                    },
                    {
                        "url": "...",
                        "width": 140,
                        "height": 140,
                        "tag": "140x140"
                    }
                ]
            },
            "relatedTickers": [
                "^GSPC",
                "INTC",
                "TSM",
                "SSNLF",
                "GFS"
            ]
        },
        {
            "uuid": "1c12f0d5-6242-3d87-b27e-9e6e0fe6b26d",
            "title": "Not All Tech CEOs Are Created Equal... ",
            "publisher": "Barrons.com",
            "link": "...",
            "providerPublishTime": 1658529060,
            "type": "STORY",
            "thumbnail": {
                "resolutions": [
                    {
                        "url": "...",
                        "width": 1280,
                        "height": 640,
                        "tag": "original"
                    },
                    {
                        "url": "...",
                        "width": 140,
                        "height": 140,
                        "tag": "140x140"
                    }
                ]
            },
            "relatedTickers": [
                "SHOP",
                "U",
                "AAPL",
                "INTC",
                "MSFT"
            ]
        }
      ]
  }`;
export { stockNews };

const stockInfo = `{
    "data": {
        "zip": "95054-1549",
        "sector": "Technology",
        "fullTimeEmployees": 122900,
        "longBusinessSummary": "Intel Corporation engages in the design..."
        "city": "Santa Clara",
        "phone": "408 765 8080",
        "state": "CA",
        "country": "United States",
        "companyOfficers": [],
        "website": "https://www.intel.com",
        "maxAge": 1,
        "address1": "2200 Mission College Boulevard",
        "industry": "Semiconductors",
        "ebitdaMargins": 0.40599,
        "profitMargins": 0.31684,
        "grossMargins": 0.54315,
        "operatingCashflow": 30534000640,
        "revenueGrowth": -0.067,
        "operatingMargins": 0.24849,
        "ebitda": 31547000832,
        "targetLowPrice": 30,
        "recommendationKey": "hold",
        "grossProfits": 43815000000,
        "freeCashflow": 8417249792,
        "targetMedianPrice": 47.25,
        "currentPrice": 39.2,
        "earningsGrowth": 1.415,
        "currentRatio": 2.134,
        "returnOnAssets": 0.07382,
        "numberOfAnalystOpinions": 36,
        "targetMeanPrice": 48.88,
        "debtToEquity": 36.114,
        "returnOnEquity": 0.26915002,
        "targetHighPrice": 74,
        "totalCash": 38696001536,
        "totalDebt": 37247000576,
        "totalRevenue": 77704003584,
        "totalCashPerShare": 9.463,
        "financialCurrency": "USD",
        "revenuePerShare": 19.117,
        "quickRatio": 1.588,
        "recommendationMean": 2.9,
        "exchange": "NMS",
        "shortName": "Intel Corporation",
        "longName": "Intel Corporation",
        "exchangeTimezoneName": "America/New_York",
        "exchangeTimezoneShortName": "EDT",
        "isEsgPopulated": false,
        "gmtOffSetMilliseconds": "-14400000",
        "quoteType": "EQUITY",
        "symbol": "INTC",
        "messageBoardId": "finmb_21127",
        "market": "us_market",
        "annualHoldingsTurnover": null,
        "enterpriseToRevenue": 2.044,
        "beta3Year": null,
        "enterpriseToEbitda": 5.035,
        "52WeekChange": -0.2782176,
        "morningStarRiskRating": null,
        "forwardEps": 3.49,
        "revenueQuarterlyGrowth": null,
        "sharesOutstanding": 4088999936,
        "fundInceptionDate": null,
        "annualReportExpenseRatio": null,
        "totalAssets": null,
        "bookValue": 25.223,
        "sharesShort": 75738465,
        "sharesPercentSharesOut": 0.0185,
        "fundFamily": null,
        "lastFiscalYearEnd": 1640390400,
        "heldPercentInstitutions": 0.63857,
        "netIncomeToCommon": 24619999232,
        "trailingEps": 6.02,
        "lastDividendValue": 0.365,
        "SandP52WeekChange": -0.104169786,
        "priceToBook": 1.5541371,
        "heldPercentInsiders": 0.00059999997,
        "nextFiscalYearEnd": 1703462400,
        "yield": null,
        "mostRecentQuarter": 1648857600,
        "shortRatio": 2.02,
        "sharesShortPreviousMonthDate": 1653955200,
        "floatShares": 4084706550,
        "beta": 0.670923,
        "enterpriseValue": 158839799808,
        "priceHint": 2,
        "threeYearAverageReturn": null,
        "lastSplitDate": 965001600,
        "lastSplitFactor": "2:1",
        "legalType": null,
        "lastDividendDate": 1651708800,
        "morningStarOverallRating": null,
        "earningsQuarterlyGrowth": 1.414,
        "priceToSalesTrailing12Months": 2.0628126,
        "dateShortInterest": 1656547200,
        "pegRatio": 4.36,
        "ytdReturn": null,
        "forwardPE": 11.232092,
        "lastCapGain": null,
        "shortPercentOfFloat": 0.0185,
        "sharesShortPriorMonth": 67019185,
        "impliedSharesOutstanding": 0,
        "category": null,
        "fiveYearAverageReturn": null,
        "previousClose": 40.61,
        "regularMarketOpen": 40.37,
        "twoHundredDayAverage": 47.1978,
        "trailingAnnualDividendYield": 0.034646638,
        "payoutRatio": 0.2338,
        "volume24Hr": null,
        "regularMarketDayHigh": 40.51,
        "navPrice": null,
        "averageDailyVolume10Day": 34431140,
        "regularMarketPreviousClose": 40.61,
        "fiftyDayAverage": 40.1002,
        "trailingAnnualDividendRate": 1.407,
        "open": 40.37,
        "toCurrency": null,
        "averageVolume10days": 34431140,
        "expireDate": null,
        "algorithm": null,
        "dividendRate": 1.46,
        "exDividendDate": 1659571200,
        "circulatingSupply": null,
        "startDate": null,
        "regularMarketDayLow": 38.94,
        "currency": "USD",
        "trailingPE": 6.511628,
        "regularMarketVolume": 41349965,
        "lastMarket": null,
        "maxSupply": null,
        "openInterest": null,
        "marketCap": 160288800768,
        "volumeAllCurrencies": null,
        "strikePrice": null,
        "averageVolume": 36584188,
        "dayLow": 38.94,
        "ask": 39.17,
        "askSize": 3200,
        "volume": 41349965,
        "fiftyTwoWeekHigh": 56.28,
        "fromCurrency": null,
        "fiveYearAvgDividendYield": 2.51,
        "fiftyTwoWeekLow": 35.54,
        "bid": 39.06,
        "tradeable": false,
        "dividendYield": 0.0372,
        "bidSize": 36200,
        "dayHigh": 40.51,
        "coinMarketCapLink": null,
        "regularMarketPrice": 39.2,
        "preMarketPrice": null,
        "logo_url": "https://logo.clearbit.com/intel.com",
        "trailingPegRatio": 2.1838
    }
}`;

export { stockInfo };
