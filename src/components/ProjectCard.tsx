import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  const images = project.images.map((img) => img);

  return (
    <Link to={`project/${project.id}`}>
      <motion.li
        className="project flex flex-1 items-stretch w-full group"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileHover={{
          translateY: -8,
        }}
      >
        <img
          className="rounded-md"
          src={images[0]}
          alt="Screenshot of project"
        />
      </motion.li>
    </Link>
  );
};
