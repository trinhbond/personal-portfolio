import { GitHub, LinkedIn } from "@mui/icons-material";
import { HTML, JavaScript, MaterialUI, React, Sass } from "./components/icons";

export const socials = [
  { name: "github", url: "https://github.com/trinhbond", icon: <GitHub /> },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/bondnicktrinh/",
    icon: <LinkedIn />,
  },
];

export const projects = [
  {
    name: "Food Recipes Blog",
    source: "https://github.com/bondtrinh1/food-recipes-blog/tree/main",
    tech: ["React", "JavaScript", "HTML", "SCSS", "React Router"],
    description: "A blog about food recipes",
  },
  {
    name: "Personal Portfolio",
    source: "https://github.com/bondtrinh1/personal-portfolio",
  },
  {
    name: "Ecommerce application",
    source: "https://github.com/bondtrinh1/ecommerce-application",
  },
];

export const techStack = [
  { icon: <Sass /> },
  { icon: <HTML /> },
  { icon: <JavaScript /> },
  { icon: <MaterialUI /> },
];

export const languages = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "C",
  "C#",
  "Java",
];

export const tools = ["Git", "GitHub", "Figma", "Confluence", "Linear"];

export const education = [
  {
    id: "AK3697",
    study: "Bachelor of Computer and Information Sciences",
    major: "Software Development",
    year: "2020 - 2023",
  },
  {
    id: "AK1311",
    study: "Certificate in Science and Technology",
    year: "2019",
  },
];

export const experience = {
  company: "Nui Markets",
  year: "Nov 2022 - Present",
  position: "Junior Software Engineer",
};
