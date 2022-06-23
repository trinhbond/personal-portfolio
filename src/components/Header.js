import React from 'react';
import"../styles/Header.css";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Projects from '../pages/Projects';
import NoSuchPage from '../pages/404';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return(
      <Router>
        <div>
          <header className="App-header">
            <a id="Header-logo">Bond Trinh</a>
            <nav className="App-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/aboutme">About Me</Link></li>
                <li>test</li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NoSuchPage/>} />
          </Routes>
        </div>
      </Router>
    )
}

export default Header;