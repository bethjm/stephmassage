import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Bodyworks</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
