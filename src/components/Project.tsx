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
      className="bg-[#4f6913] flex flex-col space-between place-content-evenly px-3.5 py-4 rounded-md"
      key={project.name}
    >
      <ExternalLink
        className="hover:underline font-semibold w-full"
        href={project.link}
      >
        {project.name}
      </ExternalLink>
      <p className="text-gray-light text-sm h-[160px] max-[768px]:h-auto mt-4">
        {project.description}
      </p>
      <div className="flex flex-row gap-4 flex-wrap max-[768px]:mt-8">
        {project.tech.map((i) => (
          <span className="min-w-fit text-xs text-gray-dark">{i}</span>
        ))}
      </div>
    </div>
  );
}
