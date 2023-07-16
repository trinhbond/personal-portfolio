import { GitHub, LinkedIn } from "@mui/icons-material";
import { HTML, JavaScript, MaterialUI, React, Sass } from "./components/icons";

export const socials = [
  { name: "Github", url: "https://github.com/bondtrinh1", icon: <GitHub /> },
  {
    name: "LinkedIn",
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
