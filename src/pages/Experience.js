import Link from "../components/Link";

function Experience() {
  return (
    <div className="max-w-3xl  py-10 px-5 text-white overflow-x-hidden m-auto">
      <div className="work text-white">
        <h1 className="font-semibold text-4xl max-[600px]:text-2xl">
          Where I've worked
        </h1>
        <div className="pt-4">
          <h2 className="text-lg max-[600px]:text-sm">
            Junior Software Engineer {"|"}{" "}
            <Link
              href="https://www.nuimarkets.com/"
              className="text-green-300 hover:underline"
            >
              Nui Markets
            </Link>
          </h2>
          <div className="nui flex flex-row justify-between items-center">
            <span className="max-[600px]:text-sm">2022 - 2023</span>
          </div>
          <ul className="flex flex-col gap-4 relative list-disc mt-6 pl-[17px] text-lg max-[600px]:text-sm">
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
