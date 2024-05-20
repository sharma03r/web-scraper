import React from "react";
import Home from "../Components/Home/Home";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "../Components/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
