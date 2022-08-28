import React from "react";
import "./Dashboard.scss";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/overview/Overview";
import WatchList from "./pages/watchlist/WatchList";
import ReportBug from "./pages/reportbug/ReportBug";
import Sidebar from "./components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="app-dashboard">
      <div className="app-dashboard-container">
        <Sidebar />
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="watchlist" element={<WatchList />} />
          <Route path="reportbug" element={<ReportBug />} />
        </Routes>
      </div>
    </div>
  );
}
