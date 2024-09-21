import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//import {BrowserRouter as Router} from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
