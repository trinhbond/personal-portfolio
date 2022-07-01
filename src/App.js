import * as React from 'react';
import "./styles/App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PageNotFound from './pages/404';
import { Routes, Route } from "react-router-dom";

function App() {
  document.title="App";
  
  return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="100vw" style={{paddingLeft:"0", paddingRight: "0", bgcolor: '#cfe8fc'}}>
      <Header />
      <Footer />
    </Container>
    <Routes>
    <Route path="/" element={<App />}/>
    <Route index element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </React.Fragment>
  );
}

export default App;