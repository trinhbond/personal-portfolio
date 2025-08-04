import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

export default function App() {
  const Layout = () => (
    <div className="container-width relative">
      <Outlet />
      <div className="w-full absolute bottom-0 pb-9 px-3">
        <div>&copy; Bond Trinh {new Date().getFullYear()}</div>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
