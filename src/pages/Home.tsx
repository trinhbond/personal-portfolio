import { motion } from "framer-motion";
import { ExternalLink } from "../components/ExternalLink";
import { Section } from "../components/Section";
import { GrLinkUp } from "react-icons/gr";
import { projects } from "../project-data";
import ProjectCard from "../components/ProjectCard";

export default function Home(): JSX.Element {
  const variant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
  };

  return (
    <motion.main className="flex flex-col items-center gap-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.85, staggerChildren: 0.25 },
          },
        }}
      >
        <Section>
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-full">
              <h1 className="text-green-dark font-bold">Bond Trinh</h1>
              <span className="text-green-light block text-sm">
                Software Developer
              </span>
            </div>
            <motion.p variants={variant}>
              I am a graduate with a Bachelor's degree in Computer and
              Information Sciences, with commercial experience in software
              development and exposure to modern web technologies. I have
              collaborated with cross-functional teams in an agile working
              environment to deliver production code in a business context. I am
              passionate about crafting digital applications with real,
              meaningful business impact.
            </motion.p>
          </div>
        </Section>

        <Section variant={variant}>
          <h2 className="text-green-dark">Work</h2>
          <div className="flex flex-wrap justify-between">
            <div>
              <ExternalLink
                className="text-green-light hover:underline font-semibold"
                href={"https://www.nuimarkets.com/"}
                icon={
                  <GrLinkUp
                    className="rotate-45"
                    fontSize={12}
                    color="#E5F0D0"
                  />
                }
              >
                Nui Markets
              </ExternalLink>
              <span className="text-green-light text-sm">
                Software Engineer
              </span>
            </div>
            <span className="text-green-light font-semibold">2022 - 2023</span>
          </div>
        </Section>

        <Section variant={variant}>
          <h2 className="text-green-dark">Projects</h2>
          <ul className="flex justify-stretch gap-4 max-md:flex-col">
            {projects.map((project) => (
              <ProjectCard {...project} />
            ))}
          </ul>
        </Section>

        <Section variant={variant}>
          <h2 className="text-green-dark">Connect</h2>
          {socials.map(({ platform, username, link }) => (
            <div className="flex flex-wrap flex-row max-[480px]:flex-col gap-10 max-[480px]:gap-0">
              <span className="w-20 max-[480px]:w-auto text-green-dark font-semibold">
                {platform}
              </span>
              <ExternalLink
                className="hover:underline text-green-light"
                href={link}
                icon={
                  <GrLinkUp
                    className="rotate-45"
                    fontSize={12}
                    color="#E5F0D0"
                  />
                }
              >
                {username}
              </ExternalLink>
            </div>
          ))}
        </Section>
      </motion.div>
    </motion.main>
  );
}

const socials = [
  {
    platform: "Email",
    username: "bondtrinh.it@gmail.com",
    link: "mailto:bondtrinh.it@gmail.com",
  },
  {
    platform: "LinkedIn",
    username: "Bond Trinh",
    link: "https://www.linkedin.com/in/bondnicktrinh/",
  },
  {
    platform: "GitHub",
    username: "trinhbond",
    link: "https://www.github.com/trinhbond",
  },
];
