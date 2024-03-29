import { useEffect, useRef, useState, ElementRef } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "../../icons/Hamburger/Hamburger";
import { Drawer } from "../Drawer";
import { Backdrop } from "../Backdrop";
import { Close } from "../../icons/Close/Close";

const Header = () => {
  const ref = useRef<ElementRef<"header">>(null);
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
    <header className="text-white" ref={ref}>
      <nav className="max-w-3xl py-10 px-5 m-auto flex flex-row justify-between items-center align-center relative z-[20]">
        <NavLink to="/" className="select-none font-semibold text-lg">
          bond
        </NavLink>
        {width > 600 ? (
          <div className="flex flex-row gap-6">
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `select-none hover:text-[#ababab] ${
                  isActive && "text-[#ababab]"
                }`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `select-none hover:text-[#ababab] ${
                  isActive && "text-[#ababab]"
                }`
              }
            >
              Projects
            </NavLink>
          </div>
        ) : (
          <button
            onClick={() => {
              setIsOpen((open) => !open);
            }}
          >
            {isOpen ? <Close /> : <Hamburger />}
          </button>
        )}
      </nav>
      {isOpen && (
        <>
          <Backdrop />
          <Drawer />
        </>
      )}
    </header>
  );
};

export { Header };
