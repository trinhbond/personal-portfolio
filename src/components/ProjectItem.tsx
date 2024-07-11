import { Launch } from "../icons/Launch";
import ExternalLink from "./ExternalLink";

type ProjectItemProps = {
  name: string;
  year: number;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectItem(project: ProjectItemProps) {
  return (
    <div className="flex flex-row justify-between gap-8 flex-wrap">
      <div>
        <span className="text-[#ababab]">{project.year}</span>
      </div>
      <ExternalLink
        href={project.link}
        className="block hover:underline"
        icon={<Launch />}
      >
        {project.name}
      </ExternalLink>
      <p className="text-[#e6e6e6]">{project.description}</p>
      <div className="flex flex-row gap-2 flex-wrap">
        {project.tech.map((i) => (
          <span className="min-w-fit rounded-full text-center text-xs text-[#cdcdcd] bg-[#333333] px-[16px] py-[4px]">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
