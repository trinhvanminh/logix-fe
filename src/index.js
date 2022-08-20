import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
