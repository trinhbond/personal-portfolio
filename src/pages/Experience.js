import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    document.title = "Experience | Bond Trinh";
  }, []);

  return (
    <main className="max-w-3xl py-10 px-5 m-auto text-white overflow-x-hidden text-base">
      <h1 className="font-bold text-[26px] mb-10">Experience</h1>
      <div className="animate work flex flex-row max-[600px]:flex-col flex-wrap gap-4">
        <div className="font-medium w-1/6 max-[600px]:w-auto whitespace-nowrap">
          2022 - 2023
        </div>
        <div className="w-4/5 max-[600px]:w-auto flex flex-col gap-6">
          <div>
            <h2 className="font-bold">Junior Software Engineer</h2>
            <span>Nui Markets</span>
          </div>
          <p>
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
}

export default Experience;
