import React from "react";
import { data } from "./data";

function Project(props) {
  return (
    <ul>
      {data?.projects.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <h1 style={{ fontSize: 100, fontWeight: "bold" }}>{item.name}</h1>
            <p>{item.description}</p>
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default Project;
