import { motion } from "framer-motion";

import Project from "../components/Project";
import ExternalLink from "../components/ExternalLink";
import Section from "../components/Section";

export default function Home(): JSX.Element {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <div className="py-6 px-3 flex flex-col items-center gap-6 leading-[1.6rem] text-sm font-medium">
        <Section>
          <div className="flex flex-row flex-wrap gap-6 items-center">
            <div className="w-[80px]">
              <img
                className="rounded-full"
                src={require("../assets/images/avatar.jpg")}
                alt="Bond Trinh"
              />
            </div>
            <div>
              <h1 className="font-bold">Bond Trinh</h1>
              <p className="text-gray-dark">Software Developer</p>
            </div>
            <p className="text-gray-light">
              Hey, I'm Bond. I am a software developer with a year of
              professional development experience with exposure to frontend
              development, automation testing and digital design. I am
              passionate about building digital experiences that are visually
              appealing and functional.
            </p>
          </div>
        </Section>

        <Section>
          <h2 className="font-bold">Work</h2>
          <div className="flex flex-row justify-between gap-6 flex-wrap">
            <div>
              <ExternalLink
                className="block hover:underline font-semibold"
                href={"https://www.nuimarkets.com/"}
              >
                Nui Markets
              </ExternalLink>
              <span className="text-gray-dark">Software Engineer</span>
            </div>
            <span>2022 - 2023</span>
            <ul className="text-gray-light list-disc">
              <li className="flex flex-row gap-4 mb-2">
                <span>&#10148;</span>
                <p>
                  Collaborated with the product and development team to convert
                  sketch designs into robust, accessible, user-friendly web
                  application interfaces.
                </p>
              </li>
              <li className="flex flex-row gap-4 mb-2">
                <span>&#10148;</span>
                <p>
                  Developed end-to-end tests identifying edge cases and
                  resolving bugs to ensure optimal performance on the Nui
                  Markets platform.
                </p>
              </li>
              <li className="flex flex-row gap-4">
                <span>&#10148;</span>
                <p>
                  Published release notes for the frontend repository using
                  Github Docs.
                </p>
              </li>
            </ul>
          </div>
        </Section>

        <Section>
          <h2 className="font-bold">Projects</h2>
          <div className="flex flex-col gap-10">
            {projects.map((project) => (
              <Project {...project} />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="font-bold">Connect</h2>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-gray-darker">Email</span>
            <ExternalLink
              className="text-gray-light hover:underline font-semibold"
              href={"mailto:bondtrinh.it@gmail.com"}
            >
              bondtrinh.it@gmail.com
            </ExternalLink>
          </div>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-gray-darker">GitHub</span>
            <ExternalLink
              className="text-gray-light hover:underline font-semibold"
              href={"https://www.github.com/trinhbond"}
            >
              trinhbond
            </ExternalLink>
          </div>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-gray-darker">LinkedIn</span>
            <ExternalLink
              className="text-gray-light hover:underline font-semibold"
              href={"https://www.linkedin.com/in/bondnicktrinh/"}
            >
              Bond Trinh
            </ExternalLink>
          </div>
        </Section>
      </div>
    </motion.main>
  );
}

const projects = [
  {
    name: "Ecommerce Application",
    year: 2024,
    description:
      "A user-friendly online shopping platform built using modern technologies for users to browse and pay for clothes. Commerce.js is integrated as the backend e-commerce solution to handle functionalities such as product management, shopping cart, checkout, and payment processing. Material UI's themed components achieve styling consistency across the application.",
    tech: ["React", "React Router", "Material UI", "SCSS", "Commerce.js"],
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
  {
    name: "Portfolio",
    year: 2022,
    description:
      "Personal website built using React and hosted on Vercel. The application features technologies such as Tailwind CSS for the UI, TypeScript for custom components and Framer Motion for animated properties.",
    tech: ["React", "Tailwind CSS", "React Router", "TypeScript"],
    link: "https://github.com/trinhbond/personal-portfolio",
  },
];
