import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import { Header, Footer } from "./components";

export default function App() {
  return (
    <div className="fade-in">
      <Header />
      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route path={path} element={element} key={key} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
