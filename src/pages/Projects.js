import React from "react";
import JokesApp from "../random-jokes.png";
import Portfolio from "../personal-portfolio.png";
import Link from "../components/ExternalLink";

const projects = [
  {
    name: "Jokes App",
    year: 2023,
    image: JokesApp,
    description:
      "A single page web app for fetching a list of random jokes using React Query, built with custom components supported by TypeScript & Material UI.",
    tech: ["React", "React Query", "Material UI", "SCSS"],
  },
  {
    name: "Personal Portfolio",
    year: 2022,
    image: Portfolio,
    description:
      "A web app showcasing my projects and sharing my professional experience, built with React and hosted on Vercel.",
    tech: ["React", "Tailwind CSS", "React Router", "SCSS"],
  },
];

function Projects() {
  return (
    <div className="max-w-3xl py-10 px-5 max-[600px]:px-2.5 max-[600px]:px-6 m-auto text-white overflow-x-hidden text-lg max-[600px]:text-base">
      <h1 className="font-semibold text-4xl max-[600px]:text-2xl mb-8">
        Projects
      </h1>
      {projects.map((project, index) => (
        <div className="flex flex-row max-[768px]:flex-col gap-3 mb-16">
          <div className="flex flex-col justify-between gap-6">
            <div key={index}>
              <Link
                href="https://github.com/trinhbond/random-jokes"
                className="text-xl max-[600px]:text-lg font-medium hover:text-green-300 "
              >
                {project.name} ({project.year})
              </Link>
              <p>{project.description}</p>
            </div>
            <div className="flex flex-row gap-4 flex-wrap text-base max-[600px]:text-sm">
              {project.tech.map((i) => (
                <span className="flex-1 max-w-min whitespace-nowrap rounded text-center text-green-200">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
