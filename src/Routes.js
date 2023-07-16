import { Home, NotFound, Projects } from "./pages";

export const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/projects", element: <Projects />, title: "Projects" },
  { path: "*", element: <NotFound />, title: "Page Not Found" },
];
