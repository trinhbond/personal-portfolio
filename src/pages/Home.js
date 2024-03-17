import { useEffect } from "react";
import { ExternalLink } from "../components/ExternalLink";
import { GitHub } from "../icons/GitHub";
import { LinkedIn } from "../icons/LinkedIn";
import { ReactSVG as React } from "../icons/React";
import { Tailwind } from "../icons/Tailwind";
import { TypeScript } from "../icons/TypeScript";
import { Wave } from "../icons/Wave";
import Avatar from "../avatar.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    document.title = "Home | Bond Trinh";
  }, []);

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-3xl py-10 px-5 m-auto text-white overflow-x-hidden"
    >
      <motion.div
        variants={item}
        className="flex flex-col justify-center align-center gap-16"
      >
        <div>
          <p className="mb-6">
            Hey, my name is <br />
            <span className="text-4xl font-bold">Bond Trinh.</span>
          </p>
          <p>
            I am an aspiring software engineer who enjoys front-end development
            and all things UX/UI. I graduated from AUT with a Bachelor of
            Computer and Information Sciences, majoring in Software Development.
            I am currently focused on learning front-end development using
            modern technologies.
          </p>
        </div>
        <img
          src={Avatar}
          className="max-[600px]:w-1/2 w-1/3 m-auto rounded-full"
          alt="Idiot"
        />
        <div className="flex flex-col gap-2 self-center">
          <ExternalLink
            icon={<Wave />}
            href="mailto:bond.nicktrinh@gmail.com"
            className="hover:underline hover:text-[#ababab]"
          >
            Email me
          </ExternalLink>
          <ExternalLink
            icon={<GitHub />}
            href="https://www.github.com/trinhbond"
            className="hover:underline hover:text-[#ababab]"
          >
            Check out my repositories
          </ExternalLink>
          <ExternalLink
            icon={<LinkedIn />}
            href="https://www.linkedin.com/in/bondnicktrinh/"
            className="hover:underline hover:text-[#ababab]"
          >
            Connect with me
          </ExternalLink>
        </div>
        <div className="self-center">
          <ul className="flex flex-row gap-8 max-[330px]:flex-col">
            {[<React />, <TypeScript />, <Tailwind />].map((tool, index) => (
              <li className="m-auto" key={index}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Home;
