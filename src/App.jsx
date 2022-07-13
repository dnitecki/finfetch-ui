import "./app.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Dashboard from "./apps/finfetch-dashboard/Dashboard";
import Home from "./apps/finfetch-api/Home";

function App() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/api" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
