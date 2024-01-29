import { useEffect } from "react";
import { NavLink } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ onClose, isOpen }: DrawerProps) => {
  useEffect(() => {
    console.log({ isOpen });
  }, [isOpen]);

  return (
    <div className={`px-4 py-8 z-[10] w-2/3 fixed right-0 top-0 bg-[#141414]`}>
      <div className="fixed right-6">
        <button
          className={`rounded-full p-2 hover:bg-zinc-800`}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
      <ul className="flex flex-col items-center justify-center h-dvh text-lg">
        <li className="leading-8">
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `select-none hover:text-green-300 ${isActive && "text-green-300"}`
            }
          >
            Experience
          </NavLink>
        </li>
        <li className="leading-8">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `select-none hover:text-green-300 ${isActive && "text-green-300"}`
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const CloseIcon = () => (
  <div className="w-full h-full fill-current">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%",
      }}
    >
      <path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
    </svg>
  </div>
);

export { Drawer };
