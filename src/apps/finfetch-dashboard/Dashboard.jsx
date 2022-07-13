import React from "react";
import "./Dashboard.scss";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/overview/Overview";
import WatchList from "./pages/watchlist/WatchList";
import ReportBug from "./pages/reportbug/ReportBug";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="reportbug" element={<ReportBug />} />
      </Routes>
    </div>
  );
}
