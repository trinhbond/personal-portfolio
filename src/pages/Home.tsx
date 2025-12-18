import { motion } from "framer-motion";
import { ProjectCard, Section } from "../components";
import { projects } from "../data";

export default function Home(): JSX.Element {
  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
  };

  return (
    <motion.main
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
      <div className="container-width h-dvh content-center" id="home">
        <Section>
          <motion.div
            className="flex flex-col flex-wrap items-center gap-2 text-md"
            variants={variants}
          >
            <motion.p>
              I am a software developer with hands-on experience in modern web
              technologies, with an emphasis on React-based applications. I am
              passionate about crafting user-centered applications with real,
              meaningful business impact.
            </motion.p>
          </motion.div>
        </Section>
      </div>
      <div className="h-dvh content-center" id="work">
        <Section>
          <motion.div variants={variants}>
            <ul className="flex flex-col gap-6">
              {projects.map((project) => (
                <ProjectCard {...project} />
              ))}
            </ul>
          </motion.div>
        </Section>
      </div>
    </motion.main>
  );
}
