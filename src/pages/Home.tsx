import { motion } from "framer-motion";

import Project from "../components/Project";
import ExternalLink from "../components/ExternalLink";
import Section from "../components/Section";

export default function Home(): JSX.Element {
  return (
    <motion.main
      className="py-8 flex flex-col items-center gap-8"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <Section>
        <div className="flex flex-row flex-wrap items-center gap-6">
          <div className="w-20">
            <img
              className="rounded-full"
              src={require("../assets/images/avatar.jpg")}
              alt="Bond Trinh"
            />
          </div>
          <div>
            <h1 className="font-bold text-xl">Bond Trinh</h1>
            <span className="block text-gray-dark text-sm">
              Software Developer
            </span>
          </div>
          <p className="text-gray-light">
            Hi, I'm Bond, a software developer with experience in frontend
            development, automation testing, and digital design. I am passionate
            about creating digital experiences that are both visually appealing
            and highly functional.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="font-bold text-xl">Work</h2>
        <div className="flex flex-row justify-between gap-6 flex-wrap">
          <div>
            <ExternalLink
              className="block hover:underline font-semibold"
              href={"https://www.nuimarkets.com/"}
            >
              Nui Markets
            </ExternalLink>
            <span className="text-gray-dark text-sm">Software Engineer</span>
          </div>
          <span>2022 - 2023</span>
        </div>
      </Section>

      <Section>
        <h2 className="font-bold text-xl">Projects</h2>
        <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-4">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-bold text-xl">Connect</h2>
        <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
          <span className="w-20 max-[480px]:w-auto text-gray-darker font-semibold">
            Email
          </span>
          <ExternalLink
            className="text-gray-light hover:underline"
            href={"mailto:bondtrinh.it@gmail.com"}
          >
            bondtrinh.it@gmail.com
          </ExternalLink>
        </div>
        <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
          <span className="w-20 max-[480px]:w-auto text-gray-darker font-semibold">
            LinkedIn
          </span>
          <ExternalLink
            className="text-gray-light hover:underline"
            href={"https://www.linkedin.com/in/bondnicktrinh/"}
          >
            Bond Trinh
          </ExternalLink>
        </div>
        <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
          <span className="w-20 max-[480px]:w-auto text-gray-darker font-semibold">
            GitHub
          </span>
          <ExternalLink
            className="text-gray-light hover:underline"
            href={"https://www.github.com/trinhbond"}
          >
            trinhbond
          </ExternalLink>
        </div>
      </Section>
    </motion.main>
  );
}

const projects = [
  {
    name: "Ecommerce Application",
    year: 2024,
    description:
      "An eCommerce platform built with React for the frontend and Commerce.js as the backend eCommerce solution to manage functionalities.",
    tech: ["React", "Commerce.js", "React Router", "Tailwind CSS"],
    link: "https://github.com/trinhbond/ecommerce-application",
  },
  {
    name: "Jokes",
    year: 2023,
    description:
      "A single page-application built using React to display a list of random jokes. React Query is used for server state management and Axios is used to grab data from an external API.",
    tech: ["React", "React Query", "Material UI", "SCSS", "TypeScript"],
    link: "https://github.com/trinhbond/random-jokes",
  },
];
