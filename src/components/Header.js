import React from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Header() {
  return (
    <header className={classNames("header")}>
      <nav>
        <Link to="/" className="name">
          bond
        </Link>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
