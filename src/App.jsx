import "./app.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Dashboard from "./apps/finfetch-dashboard/Dashboard";
import Home from "./apps/finfetch-api/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/api/*" element={<Home />} />
        <Route exact path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
