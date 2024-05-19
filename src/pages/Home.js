import avatar from "../avatar.jpg";
import { motion } from "framer-motion";
import projects from "../projects.json";
import { Launch } from "../icons/Launch";

interface ProjectProps {
  name: string;
  year: number;
  description: string;
  tech: string[];
  link: string;
}

const Project = (project: ProjectProps) => (
  <div className="flex flex-row justify-between gap-8 flex-wrap">
    <div>
      <span className="text-[#ababab]">{project.year}</span>
    </div>
    <a
      target="_blank"
      rel="noreferrer"
      href={project.link}
      className="block hover:underline"
    >
      {project.name} <Launch />
    </a>
    <p className="text-[#e6e6e6]">{project.description}</p>
    <div className="flex flex-row gap-2 flex-wrap">
      {project.tech.map((i) => (
        <span className="flex-1 max-w-min whitespace-nowrap rounded-full text-center text-xs text-[#cdcdcd] bg-[#333333] px-[16px] py-[4px]">
          {i}
        </span>
      ))}
    </div>
  </div>
);

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView="visible"
      className="relative text-sm"
    >
      <motion.div className="w-full py-6 px-3 flex flex-col justify-center items-center gap-4">
        <div className="profile w-full py-6 px-3 flex justify-center flex-col gap-6 font-medium">
          <div className="flex flex-row flex-wrap gap-6 items-center">
            <div className="w-[80px]">
              <img className="rounded-full" src={avatar} alt="Dumbass" />
            </div>
            <div className="right">
              <h1>Bond Trinh</h1>
              <p className="text-[#cdcdcd]">Software Developer</p>
            </div>
            <p className="text-[#e6e6e6]">
              Hey, I'm Bond. I am a software developer with a year of
              professional development experience. I am passionate about areas
              in digital design such as UX/UI and frontend development.
            </p>
          </div>
        </div>

        <div className="work w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium">
          <h2>Work Experience</h2>
          <div className="flex flex-row justify-between gap-6 flex-wrap">
            <div className="date">
              <span className="text-[#ababab]">2022 - 2023</span>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://www.nuimarkets.com/"}
                className="block hover:underline"
              >
                Software Engineer at Nui Markets <Launch />
              </a>
              <span className="text-[#cdcdcd]">Hybrid</span>
            </div>
          </div>
        </div>

        <div className="projects w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium">
          <h2>Side Projects</h2>
          {projects.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>

        <div className="socials w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium">
          <h2 className="font-semibold">Connect</h2>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-[#ababab]">Email</span>
            <a
              target="_blank"
              rel="noreferrer"
              href={"mailto:bond.nicktrinh@gmail.com"}
              className="text-[#e6e6e6] hover:underline"
            >
              bond.nicktrinh@gmail.com <Launch />
            </a>
          </div>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-[#ababab]">GitHub</span>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.github.com/trinhbond"}
              className="text-[#e6e6e6] hover:underline"
            >
              trinhbond <Launch />
            </a>
          </div>
          <div className="flex flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
            <span className="w-[75px] text-[#ababab]">LinkedIn</span>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://www.linkedin.com/in/bondnicktrinh/"}
              className="text-[#e6e6e6] hover:underline"
            >
              Bond Trinh <Launch />
            </a>
          </div>
        </div>
      </motion.div>
      <footer className="px-3 pt-24 pb-12 absolute left-0 right-0">
        <span className="font-medium">&copy; 2024 Bond Trinh</span>
      </footer>
    </motion.main>
  );
}

export default Home;

{
  /* <div className="mt-4 inline-block w-fit text-[12px] bg-[#0c4a22] rounded-full px-6 py-1 flex flex-row items-center gap-2">
  <Spotify />
  <span>Post Malone - Chemicals</span>
</div>; */
}
