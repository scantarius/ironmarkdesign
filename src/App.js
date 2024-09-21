import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//import {BrowserRouter as Router} from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import OrderSample from "./pages/OrderSample";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/*
        <MobileNavbar /> */}
        <Routes>
          <Route path="/orderSample" element={<OrderSample />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
