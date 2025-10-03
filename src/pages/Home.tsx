import { motion } from "framer-motion";
import { ExternalLink, Section, ProjectCard } from "../components";
import { GrLinkUp as LinkUpIcon } from "react-icons/gr";
import { projects } from "../data";

export default function Home(): JSX.Element {
  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
  };

  return (
    <motion.main className="pb-[120px]">
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
              <h1>Bond Trinh</h1>
              <span className="block text-sm">Software Developer</span>
            </div>
            <motion.p variants={variants}>
              I have commercial experience in software development, specializing
              in frontend development, testing, and technical documentation. I
              have exposure to modern web technologies and collaborated with
              cross-functional teams in Agile environments to deliver robust
              production code. I am passionate about crafting digital
              applications that drive real, meaningful business impact.
            </motion.p>
          </div>
        </Section>

        <Section variants={variants}>
          <h2>Work</h2>
          <div className="flex flex-wrap justify-between">
            <div>
              <ExternalLink
                className="hover:underline"
                href={"https://www.nuimarkets.com/"}
                icon={
                  <LinkUpIcon
                    className="rotate-45"
                    fontSize={12}
                    color="#F2F8F1"
                  />
                }
              >
                Nui Markets
              </ExternalLink>
              <span className="text-sm">Software Engineer</span>
            </div>
            <span>2022 - 2023</span>
          </div>
        </Section>

        <Section variants={variants}>
          <h2>Projects</h2>
          <ul className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard {...project} />
            ))}
          </ul>
        </Section>

        <Section variants={variants}>
          <h2>Connect with me</h2>
          {socials.map(({ platform, username, link }) => (
            <div>
              <span className="font-semibold">{platform}</span>
              <ExternalLink
                className="hover:underline"
                href={link}
                icon={
                  <LinkUpIcon
                    className="rotate-45"
                    fontSize={12}
                    color="#F2F8F1"
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
