import { NavLink } from "react-router-dom";

interface DrawerProps {
  open: boolean;
}

const Drawer = ({ open }: DrawerProps) => {
  return (
    <>
      {!!open && (
        <div className="border w-32 rounded-md absolute right-6 top-16 px-6 py-3">
          <ul>
            <li className="leading-8">
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
            </li>
            <li className="leading-8">
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
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Drawer;
