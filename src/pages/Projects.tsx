import projects from "../projects.json";
import { motion } from "framer-motion";
import { ExternalLink } from "../components/ExternalLink";
import { useEffect } from "react";

interface ProjectProps {
  name: string;
  year: number;
  number?: string;
  description: string;
  tech: string[];
}

function Projects() {
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
    document.title = "Projects | Bond Trinh";
  }, []);

  return (
    <main className="max-w-3xl py-10 px-5 m-auto text-white overflow-x-hidden flex flex-col gap-12">
      <div>
        <div>
          <h1 className="font-bold text-[26px]">Projects</h1>
          <p className="text-[#ababab]">Some projects that I've worked on.</p>
        </div>
      </div>
      <motion.ul
        className="grid overflow-hidden m-0 list-none grid-cols-1 grid-rows-2 gap-[30px]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.li key={index} variants={item}>
            <ProjectCard {...project} key={index} />
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}

export const ProjectCard = (project: ProjectProps) => (
  <div className="flex flex-row max-[768px]:flex-col gap-3">
    <div className="flex flex-col justify-between gap-6">
      <div>
        <ExternalLink
          href="https://github.com/trinhbond/random-jokes"
          className="font-semibold hover:underline inline-block pb-2"
        >
          {project.name}
        </ExternalLink>
        <p className="text-[#ababab]">{project.description}</p>
      </div>
      <div className="flex flex-row gap-2 flex-wrap text-[12px]">
        {project.tech.map((i) => (
          <span className="flex-1 max-w-min whitespace-nowrap rounded-full text-center text-black font-bold bg-green-300 px-[16px] py-[4px]">
            {i}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
