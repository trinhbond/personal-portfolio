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
    <div>
      <Link to={`project/${project.id}`}>
        <motion.li
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          whileHover={{
            translateY: -8,
          }}
        >
          <img src={images[0]} alt="Screenshot of project" />
        </motion.li>
      </Link>
      <div className="mt-3 inline-flex flex-wrap space-x-1.5">
        {project.stack.map((item) => (
          <span className="text-[#162914] bg-[#fff] text-xs rounded-md py-1 px-2 font-semibold select-none">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
