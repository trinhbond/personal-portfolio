import { useParams } from "react-router-dom";
import { projects } from "../project-data";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { ExternalLink } from "../components/ExternalLink";
import { useState } from "react";

export default function Project() {
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

  if (!id) return null;

  return (
    <main className="pb-16">
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
            <motion.div
              className="w-full py-9 px-3 font-medium"
              variants={variant}
            >
              <div className="mb-10">
                <h1 className="text-green-dark">{project.name}</h1>
                <p className="text-sm">{project.date}</p>
              </div>
              <p className="mb-2 text-green-light">{project.description}</p>
              <div className="mb-10 relative flex flex-col items-center justify-center overflow-hidden">
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
                      x: { type: "tween", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.5 },
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
                {project.images.length > 1 && (
                  <div className="mt-2 w-full flex flex-row justify-between">
                    <div
                      className="px-2 py-1 bg-[#4f6913] hover:bg-[#415610] text-sm text-green-light select-none cursor-pointer rounded-md font-semibold"
                      onClick={() => paginate(-1)}
                    >
                      prev
                    </div>
                    <div
                      className="px-2 py-1 bg-[#4f6913] hover:bg-[#415610] text-sm text-green-light select-none cursor-pointer rounded-md font-semibold"
                      onClick={() => paginate(1)}
                    >
                      next
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-10">
                <h2 className="mb-2 text-green-dark">Features</h2>
                <ul className="[&>*:not(:last-child)]:mb-1">
                  {project.features.map((feature) => (
                    <li className="text-green-light">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-10">
                <h2 className="mb-2 text-green-dark">Tech Stack</h2>
                <ul className="[&>*:not(:last-child)]:mb-1">
                  {project.stack.map((element) => (
                    <li className="text-green-light">{element}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-green-dark">Links</h2>
                <div className="flex flex-row nowrap space-x-2">
                  <ExternalLink
                    className="text-sm text-green-light bg-[#4f6913] hover:bg-[#415610] rounded-full font-semibold py-2 px-4 cursor-pointer"
                    href={project.link}
                  >
                    {project.name}
                  </ExternalLink>
                  <ExternalLink
                    className="text-sm text-green-light bg-[#4f6913] hover:bg-[#415610] rounded-full font-semibold py-2 px-4 cursor-pointer"
                    href={project.repo}
                  >
                    GitHub
                  </ExternalLink>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </main>
  );
}
