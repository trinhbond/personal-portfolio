import { useEffect } from "react";
import { ExternalLink } from "../components/ExternalLink";
import projects from "../projects.json";

interface ProjectsProps {
  name: string;
  year: number;
  number?: string;
  description: string;
  tech: string[];
}

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Bond Trinh";
  }, []);

  return (
    <main className="max-w-3xl py-10 px-5 m-auto text-white text-base overflow-x-hidden flex flex-col gap-12">
      <div>
        <h1 className="font-bold text-[26px]">Projects</h1>
        <p className="text-[#ababab]">Some projects that I've worked on.</p>
      </div>
      <div className="flex flex-col gap-16 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </main>
  );
};

export const ProjectCard = (project: ProjectsProps) => (
  <div className="animate flex flex-row max-[768px]:flex-col gap-3">
    <div className="flex flex-col justify-between gap-6">
      <div>
        <ExternalLink
          href="https://github.com/trinhbond/random-jokes"
          className="font-medium hover:underline block pb-2"
        >
          {project.name} ({project.year})
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
