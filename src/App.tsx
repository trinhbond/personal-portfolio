import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

function App() {
  const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

  const ErrorPage = () => (
    <div className="max-w-3xl max-[600px]:py-5 py-10 px-5 text-white overflow-x-hidden m-auto">
      <div className="flex flex-col justify-center align-center gap-3">
        <h1 className="text-2xl font-medium">Error 404</h1>
        <p className="text-lg">Oops... This page could not be found. </p>
        <Link to="/" className="text-lg hover:text-green-300 mt-4">
          Back to <span className="underline">Home</span>
        </Link>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
