import React from "react";
import { HTML, JavaScript, React as ReactIcon } from "./icons";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Developed by{" "}
        <span className="block-on-small">Bond Trinh &#124; 2023</span>
      </p>
      <div className="stack">
        <span>Powered by</span>
        <HTML />
        <JavaScript />
        <ReactIcon />
      </div>
    </div>
  );
}
