import React from "react";
import { Section } from "../components";

export default function Home() {
  return (
    <main>
      <Section className={"intro"}>
        <h1 className="intro-title">
          My name is <strong className="name">Bond Trinh</strong>, a junior
          frontend developer at{" "}
          <a
            href="https://www.nuimarkets.com/"
            rel="noreferrer"
            target="_blank"
          >
            Nui Markets
          </a>
        </h1>
      </Section>
    </main>
  );
}
