import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route path={path} element={element} key={key} />
        ))}
      </Routes>
    </>
  );
}
