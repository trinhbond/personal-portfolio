import { ReactSVG, TailWindSVG, TypeScriptSVG } from "./icons";

function Footer() {
  return (
    <footer className="py-8 flex flex-row justify-center align-center items-center">
      <ReactSVG />
      <TypeScriptSVG />
      <TailWindSVG />
    </footer>
  );
}

export default Footer;
