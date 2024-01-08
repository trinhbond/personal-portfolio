import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<>Error Page</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
