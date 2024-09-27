import { motion } from "framer-motion";

import Project from "../components/Project";
import ExternalLink from "../components/ExternalLink";
import Section from "../components/Section";
import Launch from "../icons/Launch";

export default function Home(): JSX.Element {
  return (
    <motion.main
      className="flex flex-col items-center gap-8"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <Section>
        <div className="flex flex-wrap items-center gap-8">
          <div className="w-full inline-flex items-center flex-wrap gap-6">
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
          </div>
          <p className="text-gray-light">
            Hi, I'm Bond, a software developer with experience in frontend
            development, automation testing, and digital design. I am passionate
            about creating digital experiences that are both visually appealing
            and highly functional. I am currently focused on frontend
            development, but I'm always open to learning new skills and
            exploring new areas.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="font-bold text-xl">Work</h2>
        <div className="flex flex-wrap justify-between">
          <div>
            <ExternalLink
              className="block hover:underline font-semibold"
              href={"https://www.nuimarkets.com/"}
              icon={<Launch />}
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
        <p className="text-gray-light">
          Side projects are an opportunity for me to learn new technologies and
          further improve my existing skill set.
        </p>
        <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {projects.map((project) => (
            <motion.li
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              whileHover={{
                translateY: -8,
              }}
            >
              <Project {...project} />
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="font-bold text-xl">Connect</h2>
        {socials.map(({ platform, username, link }) => (
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-20 max-[480px]:w-auto text-gray-darker font-semibold">
              {platform}
            </span>
            <ExternalLink
              className="text-gray-light hover:underline"
              href={link}
              icon={<Launch />}
            >
              {username}
            </ExternalLink>
          </div>
        ))}
      </Section>
    </motion.main>
  );
}

const socials = [
  {
    platform: "Email",
    username: "bondtrinh.it@gmail.com",
    link: "mailto:bondtrinh.it@gmail.com",
  },
  {
    platform: "LinkedIn",
    username: "Bond Trinh",
    link: "https://www.linkedin.com/in/bondnicktrinh/",
  },
  {
    platform: "GitHub",
    username: "trinhbond",
    link: "https://www.github.com/trinhbond",
  },
];

const projects = [
  {
    name: "Ecommerce Application",
    year: 2024,
    description:
      "An eCommerce platform built with React for the frontend and Commerce.js as the backend eCommerce solution to manage functionalities.",
    stack: ["React", "Commerce.js", "React Router", "Tailwind CSS"],
    link: "https://github.com/trinhbond/ecommerce-application",
  },
  {
    name: "Jokes",
    year: 2023,
    description:
      "A single page-application built using React to display a list of random jokes. React Query is used for server state management and Axios is used to grab data from an external API.",
    stack: ["React", "React Query", "Material UI", "SCSS", "TypeScript"],
    link: "https://github.com/trinhbond/random-jokes",
  },
];
