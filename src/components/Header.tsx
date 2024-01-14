import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "../icons/Hamburger";
import Drawer from "./Drawer";

const Header = () => {
  const ref = useRef<any>();
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);

    const getWidth = () => {
      setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    if (width >= 600) setOpen(false);
  }, [width]);

  return (
    <header
      className="max-w-3xl py-8 px-4 max-[600px]:px-6 m-auto text-white relative"
      ref={ref}
    >
      <nav className="flex flex-row justify-between items-center align-center">
        <NavLink to="/" className="select-none font-semibold text-lg">
          {"<bond />"}
        </NavLink>
        {width >= 600 ? (
          <div className="flex flex-row gap-6">
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `select-none hover:text-green-300 ${
                  isActive && "text-green-300"
                } max-[600px]:text-sm`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `select-none hover:text-green-300 ${
                  isActive && "text-green-300"
                } max-[600px]:text-sm`
              }
            >
              Projects
            </NavLink>
          </div>
        ) : (
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <Hamburger />
          </button>
        )}
      </nav>
      {!!open && <Drawer open={open} />}
    </header>
  );
};

export default Header;
