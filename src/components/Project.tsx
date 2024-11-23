import ExternalLink from "./ExternalLink";

type ProjectProps = {
  name: string;
  year: number;
  description: string;
  stack: string[];
  link: string;
};

export default function Project(project: ProjectProps): JSX.Element {
  return (
    <ExternalLink
      className="bg-[#516d22] text-green-light flex flex-col gap-4 w-full p-3.5 rounded-md shadow-2xl"
      href={project.link}
      key={project.name}
    >
      <span className="font-semibold w-full text-green-light text-sm">
        {project.name}
      </span>
      <p className="text-sm">{project.description}</p>
      <ul className="flex flex-wrap gap-4 mt-auto">
        {project.stack.map((i) => (
          <li className="min-w-fit text-xs">{i}</li>
        ))}
      </ul>
    </ExternalLink>
  );
}
