import React from "react";

// Routing 
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/pages";

export const PagesRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
