import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="header">
      <div className="nav-wrapper">
        <div className="name">
          <Link to="/">bond</Link>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive ? "nav-item active" : "nav-item"
                    }
                  >
                    projects
                  </NavLink>
                </li>
                <li>
                  <GitHub fontSize="medium" />
                </li>
                <li>
                  <LinkedIn fontSize="medium" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
