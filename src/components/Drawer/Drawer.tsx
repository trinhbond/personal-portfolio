import { NavLink } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Drawer = () => {
  return (
    <div className="px-6 py-2 z-[10] rounded absolute block ml-auto mr-0 right-8 top-20 bg-[#141414]">
      <ul className="flex flex-col justify-center h-[100px]">
        <li className="leading-8">
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `select-none ${
                isActive ? "text-green-300" : "hover:text-zinc-300"
              }`
            }
          >
            Experience
          </NavLink>
        </li>
        <li className="leading-8">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `select-none hover:text-green-300 ${
                isActive ? "text-green-300" : "hover:text-zinc-300"
              }`
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { Drawer };
