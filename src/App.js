import * as React from 'react';
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


function App() {

  return (
    <>
      <Outlet />
      {/* <Home /> */}
    </>
  );
}

export default App;