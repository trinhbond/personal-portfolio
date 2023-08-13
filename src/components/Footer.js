import React from "react";
import { HTML, JavaScript, React as ReactIcon } from "./icons";

export default function Footer({ className, children }) {
  return (
    <div className="footer">
      <span>
        Developed by{" "}
        <span className="block-on-small">Bond Trinh &#124; 2023</span>
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
