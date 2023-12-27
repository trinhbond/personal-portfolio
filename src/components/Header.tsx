import Link from "./Link";
import { GitHub, LinkedIn } from "./icons";

function Header() {
  return (
    <header className="py-8 flex flex-row justify-end align-center items-center">
      <div className="inline-block flex flex-row align-center items-center">
        <div className="mr-10">
          <Link
            icon={<GitHub />}
            className="text-lg font-normal"
            href="https://www.github.com/trinhbond"
          >
            GitHub
          </Link>
        </div>
        <div>
          <Link
            icon={<LinkedIn />}
            className="text-lg font-normal"
            href="https://www.linkedin.com/in/bondnicktrinh/"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
