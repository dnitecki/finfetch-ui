import React, { useEffect, useState } from "react";
import "./Account.scss";
import axios from "axios";
const USER_URL = "http://127.0.0.1:8000/api/user/";

export default function Account() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(USER_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const result = response?.data;
      setInfo(result);
    };
    getUserInfo();
  }, []);
  return (
    <div className="account">
      <div className="account-header"></div>
      <div className="account-container">
        <div className="account-info">
          <div>ID:&nbsp;{info.id}</div>
          <div>Email:&nbsp;{info.email}</div>
          <div>Account Created:&nbsp;{info.created}</div>
        </div>
      </div>
    </div>
  );
}
