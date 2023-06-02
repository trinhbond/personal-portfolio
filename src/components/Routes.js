import { About, Home, NotFound, Projects } from "../pages";

export const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/about", element: <About />, title: "About" },
  { path: "/projects", element: <Projects />, title: "Projects" },
  { path: "*", element: <NotFound />, title: "404" },
];
