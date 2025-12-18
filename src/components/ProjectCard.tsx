import { motion } from "framer-motion";
import { GrGithub } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ExternalLink } from "./ExternalLink";

interface ProjectProps {
  id: string;
  name: string;
  date: string;
  description: string;
  stack: string[];
  features: string[];
  link: string;
  repo: string;
  images: string[];
}

export const ProjectCard = (project: ProjectProps): JSX.Element => {
  const coverImage = project.images.map((image) => image)[0];

  return (
    <>
      <motion.li
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileHover={{
          translateY: -8,
        }}
      >
        <img
          src={coverImage}
          className="shadow-md"
          alt="Screenshot of project"
        />
      </motion.li>
      <div className="mt-3 w-full inline-flex flex-wrap justify-center space-x-4">
        <ExternalLink href={project.repo}>
          <GrGithub size={26} />
        </ExternalLink>
        <span>{" | "}</span>
        <ExternalLink href={project.link}>
          <FaExternalLinkAlt size={26} />
        </ExternalLink>
      </div>
    </>
  );
};
