import React from "react";
import "./Home.scss";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Documentation from "./pages/documentation/Documentation";
import Register from "./pages/register/Register";
import Account from "./pages/account/Account";
import PageNotFound from "../../pages/pageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

export default function Home() {
  return (
    <div className="app-api">
      <div className="app-api-container">
        <Navbar />
        <Routes>
          <Route path="docs" element={<Documentation />} />
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}
