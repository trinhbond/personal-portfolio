import React from "react";
import { HTML, JavaScript, React as ReactIcon } from "./icons";

export default function Footer({ className, children }) {
  return (
    <div className="footer">
      <span>
        Developed by <span>Bond Trinh</span> &#124; 2023
      </span>
      <div className="stack">
        <span>Powered by</span>
        <HTML />
        <JavaScript />
        <ReactIcon />
      </div>
    </div>
  );
}
