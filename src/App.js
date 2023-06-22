import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="app_page">
      <div className="app_page_container">
        <NavBar />
        <Landing />
      </div>
    </div>
  );
}

export default App;
