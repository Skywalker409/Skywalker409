import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Papers from "./pages/Papers";
import About from "./pages/About";
import LR from "./pages/LR";
import RollingImage from "./components/RollingImage";

export default function App() {
  return (
    <Router>
      <RollingImage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/papers" element={<Papers/>} />
        <Route path="/about" element={<About /> } />
        <Route path="/lr" element={<LR />      } />
      </Routes>
    </Router>
  );
}
