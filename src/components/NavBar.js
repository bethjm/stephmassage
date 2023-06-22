import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/lotus.png";

import { Link, Route, Routes } from "react-router-dom";

import App from "../App";
import About from "./About";
import Services from "./Services";
import FAQ from "./FAQ";

function NavBar() {
  return (
    <div className="header">
      <div className="nav_bar">
        <nav className="nav_items">
          <div className="logo">
            <p>Bodywork</p>
            <img src={logo} alt="a lotus flower" />
          </div>

          <div className="hamburger">
            <FaBars />
          </div>
          <ul className="nav_menu">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/services">Services</Link>
            </li>
            <li className="item">
              <Link to="/about">Meet Steph</Link>
            </li>
            <li className="item">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBar;
