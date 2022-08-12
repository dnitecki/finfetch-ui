import "./app.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Dashboard from "./apps/finfetch-dashboard/Dashboard";
import Home from "./apps/finfetch-api/Home";
import UserContext from "./context/Context";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div>
      <UserContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/api/*" element={<Home />} />
          <Route exact path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
