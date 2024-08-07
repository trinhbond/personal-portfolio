import Launch from "../icons/Launch";
import ExternalLink from "./ExternalLink";

type ProjectProps = {
  name: string;
  year: number;
  description: string;
  tech: string[];
  link: string;
};

export default function Project(project: ProjectProps): JSX.Element {
  return (
    <div
      className="flex flex-row justify-between gap-3 flex-wrap"
      key={project.name}
    >
      <ExternalLink
        href={project.link}
        className="hover:underline font-semibold"
        icon={<Launch />}
      >
        {project.name}
      </ExternalLink>
      {/* <span>{project.year}</span> */}
      <p className="text-gray-light pb-2.5">{project.description}</p>
      <div className="flex flex-row gap-2 flex-wrap">
        {project.tech.map((i) => (
          <span className="min-w-fit rounded-sm text-center text-xs text-gray-dark bg-[#333333] px-4 py-1.5">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
