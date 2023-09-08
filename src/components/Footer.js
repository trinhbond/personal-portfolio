import { HTML, JavaScript, React } from "./icons";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Developed by <span>Bond Trinh &#124; 2022</span>
      </p>
      <div className="stack inline-block">
        <span className="hide-for-small">Powered by</span>
        <HTML />
        <JavaScript />
        <React />
      </div>
    </div>
  );
}
