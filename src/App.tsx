import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import { Section } from "./components/Section";

export default function App() {
  const Layout = () => (
    <div className="container-width relative">
      <Outlet />
      <div className="absolute bottom-0 mt-12">
        <Section>
          <div className="text-green-dark">
            &copy; Bond Trinh {new Date().getFullYear()}
          </div>
        </Section>
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
