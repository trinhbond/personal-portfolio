import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Home, NotFound, Project } from "./pages";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { Link as ScrollLink } from "react-scroll";
import { ExternalLink } from "./components";

export default function App() {
  const Layout = () => (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const Header = () => (
  <header className="p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-6">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          className="cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="work"
          spy={true}
          smooth={true}
          className="cursor-pointer"
        >
          Work
        </ScrollLink>
      </div>
      <div>
        <div className="flex items-center nowrap gap-6">
          <ExternalLink href="https://www.github.com/trinhbond">
            <GrGithub fontSize={20} />
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/bondnicktrinh/">
            <GrLinkedin fontSize={20} />
          </ExternalLink>
          <ExternalLink href="mailto:bondtrinh.it@gmail.com">
            <GrMail fontSize={20} />
          </ExternalLink>
        </div>
      </div>
    </div>
  </header>
);
