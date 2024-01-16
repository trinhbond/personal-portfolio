import ExternalLink from "../components/ExternalLink";

function Experience() {
  return (
    <div className="max-w-3xl py-10 px-5 m-auto text-white overflow-x-hidden max-[600px]:text-base ">
      <div className="work text-white">
        <h1 className="font-semibold text-[26px]">Where I've worked</h1>
        <div className="pt-4 text-lg max-[600px]:text-base">
          <h2>
            Junior Software Engineer {"|"}{" "}
            <ExternalLink
              href="https://www.nuimarkets.com/"
              className="text-green-300 hover:underline"
            >
              Nui Markets
            </ExternalLink>
          </h2>
          <div className="nui flex flex-row justify-between items-center">
            <span>2022 - 2023</span>
          </div>
          <ul className="flex flex-col gap-4 relative list-disc mt-6 pl-[17px]">
            <li>
              Collaborated with a UX/UI Designer to improve the Nui Markets
              platform, implementing React component designs from Figma using
              CSS to align with current design trends.
            </li>
            <li>
              Optimised and improved performance on the Nui Markets platform by
              identifying edge cases and resolving bugs through comprehensive
              tests using Playwright, JavaScript & TypeScript.
            </li>
            <li>
              Developed comprehensive guidelines for the frontend repository to
              streamline the process of issuing pull requests, ensuring
              readability and efficiency when generating release notes on
              GitHub.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
