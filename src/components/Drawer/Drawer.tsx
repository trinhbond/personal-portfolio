import { NavLink } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Drawer = () => {
  return (
    <div className="z-[10] rounded-md absolute block right-5 top-20 bg-[#141414]">
      <div className="flex flex-col justify-center h-[100px] px-2">
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `select-none px-4 py-2 ${
              isActive ? "rounded-md bg-zinc-800" : "hover:text-zinc-300"
            }`
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `select-none px-4 py-2 ${
              isActive ? "rounded-md bg-zinc-800" : "hover:text-zinc-300"
            }`
          }
        >
          Projects
        </NavLink>
      </div>
    </div>
  );
};

export { Drawer };
