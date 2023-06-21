import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
