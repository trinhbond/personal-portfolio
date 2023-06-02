import { Routes, Route } from "react-router-dom";
import { routes } from "./components/Routes";

export default function App() {
  return (
    <Routes>
      {routes.map(({ path, element }, key) => (
        <Route path={path} element={element} key={key} />
      ))}
    </Routes>
  );
}
