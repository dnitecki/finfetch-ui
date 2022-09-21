import "./app.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
// import Dashboard from "./apps/finfetch-dashboard/Dashboard";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import UnderConstruction from "./pages/underConstruction/UnderConstruction";
import Home from "./apps/finfetch-api/Home";
import UserContext from "./context/Context";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div>
      <UserContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/api/*" element={<Home />} />
          {/* <Route exact path="/dashboard/*" element={<Dashboard />} /> */}
          <Route exact path="/dashboard/*" element={<UnderConstruction />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
