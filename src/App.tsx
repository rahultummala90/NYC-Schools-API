import React from "react";
import "./App.css";
import { Schools } from "./components/Schools";
import { SchoolDetails } from "./components/SchoolDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Schools />} />
          <Route path="/school/:dbn" element={<SchoolDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
