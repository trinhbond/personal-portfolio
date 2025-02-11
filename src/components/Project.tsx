import ExternalLink from "./ExternalLink";
import jobtracker from "../images/job-tracker-ss-2.png";

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
      className="text-green-light rounded-md cursor-pointer"
      href={project.link}
      key={project.name}
    >
      <img className="rounded-md" src={jobtracker} alt="yo" />
      <div className="pt-6">
        <h2 className="pb-1">jobtracker</h2>
        <p>
          A React-based web application that enables users to create and manage
          job application listings.
        </p>
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
