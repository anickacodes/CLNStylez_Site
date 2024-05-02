import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ServiceList from "./components/services/ServiceList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import './App.css'
import ServiceCategories from "./components/services/ServiceCategories";
import Footer from "./components/Footer";
import About from "./components/About";
import Linktree from "./pages/Linktree";

function App() {
  return (
    <>
      <Router>
      <NavBar />

        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/bio"} element={<About/>} />
          <Route path={"/ambassador-links"} element={<Linktree/>} />
          <Route path={"/service-categories"} element={<ServiceCategories />} />
          <Route path={"/services"} element={<ServiceList />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
