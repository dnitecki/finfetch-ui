import React from "react";
import "./Home.scss";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Documentation from "./pages/documentation/Documentation";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div className="app-api">
      <div className="app-api-container">
        <Navbar />
        <Routes>
          <Route path="" element={<Documentation />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
