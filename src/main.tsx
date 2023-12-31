import React from "react";
import ReactDOM from "react-dom/client";
/* import App from './App.tsx' */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/assets/styles/reset.css";
import { LandingPage } from "./components/pages/LandingPage.tsx";
import App from "./App.tsx";
import { ProfilePage } from "./components/pages/ProfilePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
