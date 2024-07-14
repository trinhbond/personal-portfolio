import avatar from "../avatar.jpg";
import { motion } from "framer-motion";
import projects from "../projects.json";
import Launch from "../icons/Launch";
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem";
import ExternalLink from "../components/ExternalLink";

export default function Home(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView="visible"
      className="relative text-sm"
    >
      <div className="w-full py-6 px-3 flex flex-col justify-center items-center gap-6">
        <div className="profile w-full py-6 px-3 flex justify-center flex-col gap-6 font-medium">
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
              professional development experience. I am passionate about areas
              in digital design such as UX/UI and frontend development.
            </p>
          </div>
        </div>

        <div className="w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium">
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
        </div>

        <div className="w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium">
          <h2>Side Projects</h2>
          {projects.map((project, index) => (
            <ProjectItem {...project} key={index} />
          ))}
        </div>

        <div className="w-full py-6 px-3 flex justify-center flex-col flex-wrap gap-6 font-medium">
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
        </div>
      </div>
      <Footer />
    </motion.main>
  );
}
