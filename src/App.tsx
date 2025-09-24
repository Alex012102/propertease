import { Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/landing-page/LandingPage";
import Auth from "./pages/auth/Auth";
import Portal from "./app/layout/Portal";
import Dashboard from "./app/Dashboard";

function App() {
  return (
    <Routes>
      {/* Marketing */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />

      {/* Portal */}
      <Route path="/app" element={<Portal />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="reports" element={<Reports />} /> */}
        {/* <Route path="properties" element={<Properties />} /> */}
        {/* <Route path="receipts" element={<Receipts />} /> */}
        {/* <Route path="profile" element={<Profile />} /> */}
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
