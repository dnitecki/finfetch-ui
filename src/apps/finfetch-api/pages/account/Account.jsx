import React, { useEffect } from "react";
import "./Account.scss";
import axios from "axios";
const USER_URL = "http://127.0.0.1:8000/api/user/";

export default function Account() {
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(USER_URL, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "*",
        },
        withCredentials: true,
      });
      console.log(response?.data);
    };
    getUserInfo();
  }, []);
  return (
    <div className="account">
      <div className="account-header"></div>
      <div className="account-container">Account</div>
    </div>
  );
}
