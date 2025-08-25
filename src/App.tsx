import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

export default function App() {
  const Layout = () => (
    <div className="container-width relative">
      <Outlet />
      <div className="text-sm absolute bottom-0 left-0 right-0 m-auto mx-6 pb-8 pt-3 border-t border-[#e5e7eb]">
        <div>
          &copy; Bond Trinh {new Date().getFullYear()} | Auckland, New Zealand
        </div>
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
