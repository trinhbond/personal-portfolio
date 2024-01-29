import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "../../icons/Hamburger";
import { Drawer } from "../Drawer";
import { Backdrop } from "../Backdrop";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current !== null) setWidth(ref.current.offsetWidth);

    const getWidth = () => {
      if (ref.current !== null) setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    if (width > 600) setIsOpen(false);
  }, [width]);

  return (
    <header
      className="max-w-3xl py-8 px-4 max-[600px]:px-6 m-auto text-white relative"
      ref={ref}
    >
      <nav className="flex flex-row justify-between items-center align-center">
        <NavLink to="/" className="select-none font-semibold text-lg">
          bond
        </NavLink>
        {width > 600 ? (
          <div className="flex flex-row gap-6">
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `select-none hover:text-green-300 ${
                  isActive && "text-green-300"
                }`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `select-none hover:text-green-300 ${
                  isActive && "text-green-300"
                }`
              }
            >
              Projects
            </NavLink>
          </div>
        ) : (
          <button
            className={`rounded-full p-2 hover:bg-zinc-800 ${
              isOpen && "bg-zinc-800"
            }`}
            onClick={() => {
              setIsOpen((open) => !open);
            }}
          >
            <Hamburger />
          </button>
        )}
      </nav>
      {isOpen && (
        <>
          <Backdrop />
          <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
      )}
    </header>
  );
};

export { Header };
