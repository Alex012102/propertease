import { Routes, Route } from "react-router-dom";
import "./App.css";


import LandingPage from "./pages/landing-page/LandingPage";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
