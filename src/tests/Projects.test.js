import { render, screen } from "@testing-library/react";
import { ProjectCard } from "../pages/Projects";
import projects from "../projects.json";

test("renders JSON data correctly", () => {
  render(
    <div className="flex flex-col gap-16 flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </div>
  );

  expect(screen.getByRole("link", { name: "Jokes App (2023)" })).toBeVisible();
  expect(
    screen.getByRole("link", { name: "Personal Portfolio (2022)" })
  ).toBeVisible();
});
