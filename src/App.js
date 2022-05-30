import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate, Link } from "react-router-dom";

// Pagine
import Home from './pages/Home';
import Party from './pages/Party';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Party" element={<Party />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
