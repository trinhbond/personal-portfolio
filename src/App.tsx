import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home, NotFound, Project } from "./pages";

export default function App() {
  const Layout = () => (
    <div className="container-width relative">
      <Outlet />
      <div className="absolute bottom-0 left-0 right-0 mx-6 pb-8 pt-3 border-t">
        &copy; Bond Trinh {new Date().getFullYear()} | Auckland, New Zealand
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
