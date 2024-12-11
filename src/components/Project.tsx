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
    <div
      className="bg-[#516d22] text-green-light flex flex-col gap-4 w-full p-3.5 rounded-md shadow-2xl"
      key={project.name}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold w-full text-green-light">
          {project.name}
        </span>
        <ExternalLink
          className="bg-[#0c1005] text-xs inline-flex gap-1 px-3.5 py-1.5 rounded-full"
          href={project.link}
          key={project.name}
        >
          View
        </ExternalLink>
      </div>
      <p className="text-sm">{project.description}</p>
      <ul className="flex flex-wrap gap-4 mt-auto">
        {project.stack.map((i) => (
          <li className="min-w-fit text-xs">{i}</li>
        ))}
      </ul>
    </div>
  );
}
