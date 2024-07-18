import avatar from "../avatar.jpg";
import { motion } from "framer-motion";
import Launch from "../icons/Launch";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ExternalLink from "../components/ExternalLink";

export default function Home(): JSX.Element {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };
  const variant = {
    hidden: { opacity: 0 },
    visible,
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <div className="py-6 px-3 flex flex-col justify-center items-center gap-6 leading-[1.6rem] text-sm">
        <motion.section
          className="w-full py-6 px-3 flex justify-center flex-col gap-6 font-medium"
          variants={variant}
        >
          <div className="flex flex-row flex-wrap gap-6 items-center">
            <div className="w-[80px]">
              <img className="rounded-full" src={avatar} alt="Dumbass" />
            </div>
            <div className="right">
              <h1>Bond Trinh</h1>
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
        </motion.section>

        <motion.section
          className="w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium"
          variants={variant}
        >
          <h2>Work Experience</h2>
          <div className="flex flex-row justify-between gap-6 flex-wrap">
            <div className="date">
              <span className="text-gray-darker">2022 - 2023</span>
            </div>
            <div>
              <ExternalLink
                className="block hover:underline"
                href={"https://www.nuimarkets.com/"}
                icon={<Launch />}
              >
                Nui Markets
              </ExternalLink>
              <span className="text-gray-dark">Software Engineer</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium"
          variants={variant}
        >
          <h2>Side Projects</h2>
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </motion.section>

        <motion.section
          className="w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium"
          variants={variant}
        >
          <h2>Connect</h2>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-gray-darker">Email</span>
            <ExternalLink
              className="text-gray-light hover:underline"
              href={"mailto:bondtrinh.it@gmail.com"}
              icon={<Launch />}
            >
              bondtrinh.it@gmail.com
            </ExternalLink>
          </div>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-gray-darker">GitHub</span>
            <ExternalLink
              className="text-gray-light hover:underline"
              href={"https://www.github.com/trinhbond"}
              icon={<Launch />}
            >
              trinhbond
            </ExternalLink>
          </div>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-gray-darker">LinkedIn</span>
            <ExternalLink
              className="text-gray-light hover:underline"
              href={"https://www.linkedin.com/in/bondnicktrinh/"}
              icon={<Launch />}
            >
              Bond Trinh
            </ExternalLink>
          </div>
        </motion.section>
      </div>

      <motion.div variants={variant}>
        <Footer />
      </motion.div>
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
    tech: ["React", "Tailwind CSS", "React Router", "SCSS", "TypeScript"],
    link: "https://github.com/trinhbond/personal-portfolio",
  },
];
