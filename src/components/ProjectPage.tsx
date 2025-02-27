import { useParams } from "react-router-dom";
import { projects } from "../project-data";
import { AnimatePresence, motion, wrap } from "framer-motion";
import Section from "./Section";
import ExternalLink from "./ExternalLink";
import { useState } from "react";

export default function ProjectPage() {
  const { id } = useParams();
  const [[page, direction], setPage] = useState([0, 0]);
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const variant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
  };
  const variant2 = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
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
        {projects
          .filter((project) => project.id === id)
          .map((project) => (
            <Section variant={variant}>
              <h1 className="text-green-dark">
                {project.name} ({project.year})
              </h1>
              <div className="relative flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    className="rounded-md"
                    key={page}
                    src={project.images[wrap(0, project.images.length, page)]}
                    custom={direction}
                    variants={variant2}
                    initial="enter"
                    animate="center"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  />
                </AnimatePresence>
                <div
                  className="next absolute right-[10px] top-[calc(50%-20px)] bg-[#4f6913] text-[#fff] rounded-[30px] w-[30px] h-[30px] flex justify-center items-center select-none cursor-pointer font-bold z-10"
                  onClick={() => paginate(1)}
                >
                  {">"}
                </div>
                <div
                  className="prev absolute left-[10px] top-[calc(50%-20px)] bg-[#4f6913] text-[#fff] text-white rounded-[30px] w-[30px] h-[30px] flex justify-center items-center select-none cursor-pointer font-bold z-10"
                  onClick={() => paginate(-1)}
                >
                  {"<"}
                </div>
              </div>
              <div className="text-green-light">{project.description}</div>
              <div className="flex flex-col gap-3 mt-6">
                <h2 className="text-green-dark">Features</h2>
                {project.features.map((feature) => (
                  <div className="text-green-light">{feature}</div>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <h2 className="text-green-dark">Tech Stack</h2>
                <div>
                  {project.stack.map((element) => (
                    <span className="text-green-light mr-3">{element}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <h2 className="text-green-dark">Find out more</h2>
                <div className="flex gap-3 items-center mt-3">
                  <ExternalLink
                    className="text-lg text-green-light bg-[#4f6913] hover:bg-[#415610] rounded-full font-semibold py-4 px-8 cursor-pointer"
                    href={project.link}
                  >
                    Visit Project
                  </ExternalLink>
                  <ExternalLink
                    className="text-lg text-green-light bg-[#4f6913] hover:bg-[#415610] rounded-full font-semibold py-4 px-8 cursor-pointer"
                    href={project.repo}
                  >
                    Repository
                  </ExternalLink>
                </div>
              </div>
            </Section>
          ))}
      </motion.div>
    </motion.main>
  );
}
