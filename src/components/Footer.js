import React from "react";
import { HTML, JavaScript, React as ReactIcon } from "./icons";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Developed by <span>Bond Trinh &#124; 2023</span>
      </p>
      <div className="stack inline-block">
        <span className="hide-for-small">Powered by</span>
        <HTML />
        <JavaScript />
        <ReactIcon />
      </div>
    </div>
  );
}
