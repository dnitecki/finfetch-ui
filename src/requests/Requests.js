import axios from "axios";
const basePath = "http://127.0.0.1:8000";

axios.defaults.withCredentials = true;

// USER AUTHENTICATION

export const registerUser = async (email, pwd) => {
  const url = `${basePath}/api/register/`;
  await axios.post(url, JSON.stringify({ email: email, password: pwd }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const loginUser = async (email, pwd) => {
  const url = `${basePath}/api/login/`;
  await axios.post(url, JSON.stringify({ email: email, password: pwd }), {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const getUserAccount = async () => {
  const url = `${basePath}/api/user/`;
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return response.data;
};

export const logoutUser = async () => {
  const url = `${basePath}/api/logout/`;
  await axios.post(url, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

// STOCK API

export const getStockPrice = async (key, ticker, start, end) => {
  const url = `${basePath}/api/stock?ticker=${ticker}&startDate=${start}&endDate=${end}`;
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Api-Key ${key}`,
    },
  });
  return response.data;
};

export const getStockInfo = async (key, ticker) => {
  const url = `${basePath}/api/stock/info?ticker=${ticker}`;
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Api-Key ${key}`,
    },
  });
  return response.data;
};
