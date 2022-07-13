import React from "react";
import "./Dashboard.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Overview from "./pages/overview/Overview";
import WatchList from "./pages/watchlist/WatchList";
import ReportBug from "./pages/reportbug/ReportBug";
import Sidebar from "./components/sidebar/Sidebar";
import "primeicons/primeicons.css"; //icons

export default function Dashboard() {
  const location = useLocation();
  return (
    <div className="app-dashboard">
      <div className="app-dashboard-container">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <Routes location={location} key={location.pathname}>
          <Route path="overview" element={<Overview />} />
          <Route path="watchlist" element={<WatchList />} />
          <Route path="reportbug" element={<ReportBug />} />
        </Routes>
      </div>
    </div>
  );
}
