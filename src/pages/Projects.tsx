import { useEffect } from "react";
import Link from "../components/ExternalLink";
import projects from "../projects.json";

interface ProjectsProps {
  name: string;
  year: number;
  no: string;
  image: string;
  description: string;
  tech: string[];
}

function Projects() {
  useEffect(() => {
    document.title = "Projects | Bond Trinh";
  }, []);

  return (
    <div className="max-w-3xl py-10 px-5 m-auto text-white max-[600px]:text-base overflow-x-hidden flex flex-col gap-12">
      <div>
        <h1 className="font-semibold text-[26px]">Projects</h1>
        <p>Some projects that I've worked on.</p>
      </div>
      <div className="flex flex-col gap-16 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
}

export const ProjectCard = (project: ProjectsProps) => (
  <div className="flex flex-row max-[768px]:flex-col gap-3">
    <span className="font-bold text-2xl mr-10 max-[600px]:mr-0 max-[600px]:block">
      {project.no}
    </span>
    <div className="flex flex-col justify-between gap-6">
      <div>
        <Link
          href="https://github.com/trinhbond/random-jokes"
          className="text-green-300 font-medium hover:underline"
        >
          {project.name} ({project.year})
        </Link>
        <p>{project.description}</p>
      </div>
      <div className="flex flex-row gap-2 flex-wrap text-sm">
        {project.tech.map((i) => (
          <span className="flex-1 max-w-min whitespace-nowrap rounded-md text-center border-2 border-green-300 px-3.5 py-1.5">
            {i}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;