import { Launch } from "../../icons/Launch";

interface ProjectProps {
  name: string;
  year: number;
  description: string;
  tech: string[];
  link: string;
}

const ProjectItem = (project: ProjectProps) => (
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

export { ProjectItem };
