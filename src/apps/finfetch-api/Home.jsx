import React from "react";
import "./Home.scss";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  return (
    <div className="app-api">
      <div className="app-api-container">
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
