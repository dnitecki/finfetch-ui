import React from "react";
import { useState } from "react";
import "./Home.scss";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Documentation from "./pages/documentation/Documentation";
import Register from "./pages/register/Register";
import Account from "./pages/account/Account";
import { Route, Routes } from "react-router-dom";
import UserContext from "../../components/context/UserContext";

export default function Home() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div className="app-api">
      <UserContext.Provider value={{ loginStatus, setLoginStatus }}>
        <div className="app-api-container">
          <Navbar />
          <Routes>
            <Route path="" element={<Documentation />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}
