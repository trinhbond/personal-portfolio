import "./App.css";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import NoSuchPage from './pages/404';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="App-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutme">About Me</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NoSuchPage/>} />
      </Routes>
    </Router>
  );
}

export default App;