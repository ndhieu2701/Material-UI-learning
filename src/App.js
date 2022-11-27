import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/:slug" element={<Tour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
