import React from "react";
import { socials } from "../config";

export default function Header() {
  const s = socials.map(({ name, url }) => (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </li>
  ));

  console.log(s);
  return (
    <div className="header">
      <div className="nav-wrapper">
        <div className="name">
          <span>bond</span>
          <div>
            <nav>
              <ul>
                {/* <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive ? "nav-item active" : "nav-item"
                    }
                  >
                    projects
                  </NavLink>
                </li> */}
                {/* <li>
                  <a
                    href="https://github.com/trinhbond"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bondnicktrinh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin
                  </a>
                </li> */}
                {s}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
