import { motion } from "framer-motion";

import Project from "../components/Project";
import ExternalLink from "../components/ExternalLink";
import Section from "../components/Section";
import { SiFramer, SiTypescript, SiVercel } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrLinkUp } from "react-icons/gr";

export default function Home(): JSX.Element {
  const variant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
  };

  return (
    <motion.main className="flex flex-col items-center gap-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.85, staggerChildren: 0.25 },
          },
        }}
      >
        <Section>
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-full inline-flex items-center flex-wrap gap-6">
              <div>
                <h1 className="font-bold text-xl">Bond Trinh</h1>
                <span className="block text-gray-dark text-sm">
                  Software Developer
                </span>
              </div>
            </div>
            <motion.p className="text-gray-light" variants={variant}>
              Hi, I'm Bond, a software developer with experience in frontend
              development, automation testing, and digital design. I am
              passionate about creating digital experiences that are both
              visually appealing and highly functional. I am currently focused
              on frontend development, but I'm always open to learning new
              skills and exploring new areas.
            </motion.p>
          </div>
        </Section>

        <Section variant={variant}>
          <h2>Work</h2>
          <div className="flex flex-wrap justify-between">
            <div>
              <ExternalLink
                className="block hover:underline font-semibold"
                href={"https://www.nuimarkets.com/"}
                icon={<GrLinkUp className="rotate-45" fontSize={12} />}
              >
                Nui Markets
              </ExternalLink>
              <span className="text-gray-dark text-sm">Software Engineer</span>
            </div>
            <span className="font-semibold">2022 - 2023</span>
          </div>
        </Section>

        <Section variant={variant}>
          <h2>Projects</h2>
          <p className="text-gray-light">
            Side projects are an opportunity for me to learn new technologies
            and further improve my existing skill set.
          </p>
          <ul className="flex justify-stretch gap-4 max-md:flex-col">
            {projects.map((project) => (
              <motion.li
                className="flex flex-1 items-stretch w-full"
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

        <Section variant={variant}>
          <h2>Connect</h2>
          {socials.map(({ platform, username, link }) => (
            <div className="flex flex-wrap flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
              <span className="w-20 max-[480px]:w-auto text-gray-darker font-semibold">
                {platform}
              </span>
              <ExternalLink
                className="text-gray-light hover:underline"
                href={link}
                icon={<GrLinkUp className="rotate-45" fontSize={12} />}
              >
                {username}
              </ExternalLink>
            </div>
          ))}
        </Section>
      </motion.div>

      <Section>
        <div className="text-[#fff] flex flex-wrap justify-between items-center max-sm:gap-8 max-sm:flex-col-reverse">
          <span className="text-gray-light">
            &copy; Bond Trinh {new Date().getFullYear()}
          </span>
          <ul className="flex flex-wrap gap-4 max-sm:justify-evenly">
            {[
              <RiReactjsFill size={"1.25rem"} title="React" />,
              <SiTypescript size={"1.25rem"} title="TypeScript" />,
              <RiTailwindCssFill size={"1.25rem"} title="Tailwind CSS" />,
              <SiFramer size={"1.25rem"} title="Framer" />,
              <SiVercel size={"1.25rem"} title="Vercel" />,
            ].map((logo) => (
              <motion.li
                className="flex flex-1 items-stretch w-full"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  translateY: -8,
                }}
              >
                {logo}
              </motion.li>
            ))}
          </ul>
        </div>
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
