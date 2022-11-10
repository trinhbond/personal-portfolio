import * as React from 'react';
import "./styles/App.css";
import { Outlet, useLocation } from "react-router-dom";

const titles = {
  "/": "Home",
  "Projects": "Projects",
  "About": "About"
};

function App() {
  const location = useLocation();
  const [title, setTitle] = React.useState(titles["/"]);

  React.useEffect(() => {
    setTitle(titles[location.pathname]);
  }, [location.pathname]);
  


  return (
    <>
      <Outlet />
      {/* <Home /> */}
    </>
  );
}

export default App;