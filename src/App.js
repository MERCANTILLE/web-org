import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages";
import Rules from "./pages/actions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/actions" element={<Rules />} />
      </Routes>
    </Router>
  );
}

export default App;
