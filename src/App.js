import "./App.css";
import React from "react";
//import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
