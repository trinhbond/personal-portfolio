import * as React from 'react';
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";


function App() {

  return (
    <>
      <Outlet />
      {/* <Home /> */}
    </>
  );
}

export default App;