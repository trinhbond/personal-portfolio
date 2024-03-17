import { useEffect } from "react";
import { ExternalLink } from "../components/ExternalLink";
import { motion } from "framer-motion";

const Experience = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    document.title = "Experience | Bond Trinh";
  }, []);

  return (
    <main className="max-w-3xl py-10 px-5 m-auto text-white overflow-x-hidden flex flex-col gap-12">
      <div>
        <h1 className="font-bold text-[26px]">Experience</h1>
        <p className="text-[#ababab]">
          Looking to hire?{" "}
          <ExternalLink
            href="mailto:bond.nicktrinh@gmail.com"
            className="underline hover:no-underline hover:text-[#ababab]"
          >
            My inbox is always open!
          </ExternalLink>
        </p>
      </div>

      <motion.ul variants={container} initial="hidden" animate="visible">
        <motion.li variants={item}>
          <div className="flex flex-row max-[600px]:flex-col flex-wrap gap-6 relative">
            <div className="max-[600px]:w-auto flex flex-col gap-3">
              <div>
                <h2 className="font-semibold inline-block max-[600px]:block">
                  Junior Software Engineer {" · (2022 - 2023)"}
                </h2>
                <span className="block font-semibold text-[#ababab]">
                  Nui Markets
                </span>
              </div>
              <ul className="text-[#ababab] pl-[16.5px] list-disc flex flex-col flex-wrap gap-4 ">
                <li>
                  Collaborated with a UX/UI Designer to improve the Nui Markets
                  platform, implementing React component designs from Figma
                  using CSS to align with current design trends.
                </li>
                <li>
                  Optimised and improved performance on the Nui Markets platform
                  by identifying edge cases and resolving bugs through
                  comprehensive tests using Playwright, JavaScript & TypeScript.
                </li>
                <li>
                  Converted the test automation codebase from JavaScript to
                  TypeScript, resulting in less type conflicts and improved code
                  maintainance and readability.
                </li>
                <li>
                  Drafted release notes for the frontend repository and created
                  a standard format for fellow software engineers to adhere to,
                  providing a more descriptive overview for feature updates and
                  bug fixes.
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-2 flex-wrap text-[12px]">
              {[
                "HTML",
                "SCSS",
                "React",
                "JavaScript",
                "TypeScript",
                "Playwright",
                "Figma",
                "Confluence",
                "Linear",
              ].map((i) => (
                <span className="flex-1 max-w-min whitespace-nowrap rounded-full text-center text-black font-bold bg-green-300 px-[16px] py-[4px]">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </motion.li>
      </motion.ul>
    </main>
  );
};

export default Experience;
