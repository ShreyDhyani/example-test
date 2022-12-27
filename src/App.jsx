import { useState } from "react";
import "./App.css";
import Welcome from "./pages/Welcome";
import Chooser from "./pages/Chooser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="px-40 py-20">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/chooser" element={<Chooser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
