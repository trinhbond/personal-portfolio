import ExternalLink from "./ExternalLink";

type ProjectProps = {
  name: string;
  year: number;
  description: string;
  stack: string[];
  link: string;
  image?: string;
};

export default function Project(project: ProjectProps): JSX.Element {
  return (
    <ExternalLink
      className="text-green-light rounded-md cursor-pointer"
      href={project.link}
      key={project.name}
    >
      <img className="rounded-md" src={project.image} alt={project.name} />
      <div className="mt-6">
        <h2 className="mb-1">{project.name}</h2>
        <p>{project.description}</p>
      </div>
      {/* <div className="p-3.5">
        <span className="font-semibold text-green-light">{project.name}</span>
        <p className="text-sm">{project.description}</p>
        <ul className="flex flex-wrap gap-4 mt-auto">
          {project.stack.map((i) => (
            <li className="min-w-fit text-xs">{i}</li>
          ))}
        </ul>
      </div> */}
    </ExternalLink>
  );
}
