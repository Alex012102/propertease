import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/landing-page/LandingPage";
import Auth from "./pages/auth/Auth";
import Portal from "./app/layout/Portal";
import Dashboard from "./app/Dashboard";
import Maintenance from "./app/Maintenance";
import Properties from "./app/Properties";
import Receipts from "./app/Receipts";
import Leases from "./app/Leases";
import Bank from "./app/Bank";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Map pathname to tab labels
    const pathToTab: Record<string, string> = {
      "/app/": "Dashboard",
      "/app/maintenance": "Maintenance",
      "/app/properties": "Properties",
      "/app/receipts": "Receipts",
      "/app/leases": "Leases",
      "/app/bank": "Bank",
      "/auth": "Authentication",
      "/": "Home",
    };

    const newTab = pathToTab[location.pathname] || "Unknown";

    document.title = `PropertEase | ${newTab}`;
  }, [location]);

  return (
    <Routes>
      {/* Marketing */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />

      {/* Portal */}
      <Route path="/app" element={<Portal />}>
        <Route index element={<Dashboard />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="properties" element={<Properties />} />
        <Route path="receipts" element={<Receipts />} />
        <Route path="leases" element={<Leases />} />
        <Route path="bank" element={<Bank />} />
      </Route>
    </Routes>
  );
}

export default App;
