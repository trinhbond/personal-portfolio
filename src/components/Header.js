import React from "react";
import useMeasure from "react-use-measure";
import { socials } from "../config";

export default function Header() {
  const [ref, { width }] = useMeasure();
  const headerIsSmall = width < 350;
  const mySocials = socials.map(({ name, url, icon }) => (
    <li className={headerIsSmall && "small"}>
      <a href={url} target="_blank" rel="noreferrer">
        {headerIsSmall ? icon : name}
      </a>
    </li>
  ));

  return (
    <div className="header" ref={ref}>
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
              {mySocials}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
