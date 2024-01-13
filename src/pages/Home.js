import Link from "../components/Link";
import { GitHub } from "../icons/GitHub";
import { LinkedIn } from "../icons/LinkedIn";
import { ReactSVG as React } from "../icons/React";
import { TailWindSVG as TailWind } from "../icons/Tailwind";
import { TypeScriptSVG as TypeScript } from "../icons/TypeScript";
import { Wave } from "../icons/Wave";
import Me from "../me.jpg";

function Home() {
  return (
    <main className="max-w-3xl max-[600px]:py-5 py-10 px-5 max-[600px]:px-6 m-auto text-white overflow-x-hidden">
      <div className="flex flex-col justify-center align-center gap-16">
        <div className="top">
          <p className="mb-4 text-lg max-[600px]:text-sm">
            Hey, my name is <br />
            <span className="text-4xl font-bold">Bond Trinh.</span>
          </p>
          <p className="text-lg max-[600px]:text-sm">
            I am a{" "}
            <span className="text-green-300">junior software engineer</span> who
            enjoys front-end development and all things UX/UI. I graduated from
            AUT with a Bachelor of Computer and Information Sciences, majoring
            in Software Development. I am currently focused on learning
            front-end development using modern technologies.
          </p>
        </div>
        <img src={Me} className="w-1/3 m-auto rounded-full" alt="Idiot" />
        <div className="middle flex flex-col gap-2 text-lg self-center max-[600px]:text-sm">
          <Link icon={<Wave />} href="mailto:bond.nicktrinh@gmail.com">
            <span className="hover:underline hover:text-green-300">
              Email me
            </span>
          </Link>
          <Link icon={<GitHub />} href="https://www.github.com/trinhbond">
            <span className="hover:underline hover:text-green-300">
              Check out my repository
            </span>
          </Link>
          <Link
            icon={<LinkedIn />}
            href="https://www.linkedin.com/in/bondnicktrinh/"
          >
            <span className="hover:underline hover:text-green-300">
              Connect with me
            </span>
          </Link>
        </div>
        <div className="bottom self-center">
          <ul className="flex flex-row gap-8 max-[330px]:flex-col">
            {[<React />, <TypeScript />, <TailWind />].map((i) => (
              <li className="m-auto">{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;
