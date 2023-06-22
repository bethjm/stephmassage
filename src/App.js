import { React, useState } from "react";

import "./App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./components/images/lotus.png";

import { Link, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Landing from "./components/Landing";

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <nav className="nav_bar">
        <div className="logo">
          <Link to="/">Bodywork</Link>
          <img src={logo} alt="a lotus flower" />
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={click ? "nav_menu active" : "nav_menu"}>
          <li className="nav_item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav_item">
            <Link to="/about">Meet Steph</Link>
          </li>
          <li className="nav_item">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
