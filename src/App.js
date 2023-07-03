import { React, useState } from "react";

import "./App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./components/images/lotus.png";

import { Link, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import GenFAQ from "./components/FAQ_Pages/GenFAQ";
import YogaFAQ from "./components/FAQ_Pages/YogaFAQ";
import CupFAQ from "./components/FAQ_Pages/CupFAQ";
import ReikiFAQ from "./components/FAQ_Pages/ReikiFAQ";
import MassageFAQ from "./components/FAQ_Pages/MassageFAQ";
import Landing from "./components/Landing";
import Yoga from "./components/Service_Offering/Yoga";
import Massage from "./components/Service_Offering/Massage";
import Reiki from "./components/Service_Offering/Reiki";

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <div className="header">
        <nav className="nav_bar">
          <div className="logo">
            <Link className="logo_name" to="/">
              <p>Bodywork</p>
            </Link>
            <img src={logo} alt="a lotus flower" />
          </div>

          <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <ul className={click ? "nav_menu active" : "nav_menu"}>
            <div className="dropdown">
              <li className="nav_item" onClick={handleClick}>
                <Link className="link" to="/services">
                  Services
                </Link>
                <div className="dropdown_content">
                  <ul>
                    <li onClick={handleClick}>
                      <Link className="link" to="/massage">
                        Massage
                      </Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link className="link" to="/yoga">
                        Yoga
                      </Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link className="link" to="/reiki">
                        Reiki
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="mobile_nav">
              <li className="nav_item" onClick={handleClick}>
                <Link className="link" to="/massage">
                  Massage
                </Link>
              </li>
              <li className="nav_item" onClick={handleClick}>
                <Link className="link" to="/yoga">
                  Yoga
                </Link>
              </li>
              <li className="nav_item" onClick={handleClick}>
                <Link className="link" to="/reiki">
                  Reiki
                </Link>
              </li>
            </div>
            <li className="nav_item" onClick={handleClick}>
              <Link className="link" to="/about">
                Meet Steph
              </Link>
            </li>
            <li className="nav_item">
              <Link className="link" to="/faq" onClick={handleClick}>
                FAQ
              </Link>
            </li>
            <li className="nav_item">
              <a href="#" className="book_now" id="book_now_id">
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq_general" element={<GenFAQ />} />
        <Route path="/faq_yoga" element={<YogaFAQ />} />
        <Route path="/faq_reiki" element={<ReikiFAQ />} />
        <Route path="/faq_massage" element={<MassageFAQ />} />
        <Route path="/faq_cupping" element={<CupFAQ />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/reiki" element={<Reiki />} />
        <Route path="/yoga" element={<Yoga />} />
      </Routes>
    </div>
  );
}

export default App;
