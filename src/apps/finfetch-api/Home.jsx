import React from "react";
import "./Home.scss";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="app-api">
      <div className="app-api-container">
        <Navbar />
      </div>
    </div>
  );
}
