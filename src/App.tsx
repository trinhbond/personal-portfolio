import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

const App = () => {
  const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

  const ErrorPage = () => (
    <div className="animate max-w-3xl py-5 py-10 px-5 text-white overflow-x-hidden m-auto absolute left-0 right-0 top-0 flex justify-center h-dvh">
      <div className="flex flex-col justify-center align-center gap-6">
        <div>
          <h1 className="text-4xl font-bold">Error 404</h1>
          <p>This page could not be found. </p>
        </div>
        <Link to="/">
          Back to <span className="underline text-green-300">Home</span>
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
};

export default App;
