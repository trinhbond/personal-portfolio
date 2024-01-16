import { NavLink } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="border w-36 rounded-md absolute right-6 top-16 px-6 py-3">
      <ul>
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

export default Drawer;
