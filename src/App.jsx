import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ServiceList from "./components/services/ServiceList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import './App.css'

function App() {
  return (
    <>
      <Router>
      <NavBar />

        <Routes>
          <Route path={"/"} element={<Home/>} />

          <Route path={"/services"} element={<ServiceList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
