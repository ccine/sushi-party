import React from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pagine
import Home from "./Home";
import Party from "./Party";

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
