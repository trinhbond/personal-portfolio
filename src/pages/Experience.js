import { useEffect } from "react";
import { ExternalLink } from "../components/ExternalLink";

const Experience = () => {
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
      <div className="animate work flex flex-row max-[600px]:flex-col flex-wrap gap-4">
        <div className="font-medium w-1/6 max-[600px]:w-auto whitespace-nowrap">
          2022 - 2023
        </div>
        <div className="w-4/5 max-[600px]:w-auto flex flex-col gap-6">
          <div>
            <h2 className="font-semibold inline-block max-[600px]:block">
              Junior Software Engineer
            </h2>{" "}
            <span className="max-[600px]:hidden">{" · "}</span>
            <span className="font-semibold text-[#ababab]">Nui Markets</span>
          </div>
          <p className="text-[#ababab]">
            Assumed multiple responsibilities involving frontend development and
            test automation. Typical responsibilities included styling React
            components and collaborating with a UX/UI Designer to bring design
            ideas to life. Additionally, I have experience in creating
            end-to-end tests to optimise and improve the Nui Markets platform,
            resolving bugs and identifying edge cases.
          </p>
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
      </div>
    </main>
  );
};

export default Experience;
