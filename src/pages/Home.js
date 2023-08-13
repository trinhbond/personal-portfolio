import React from "react";
import { Section } from "../components";
import { languages, tools, education, experience } from "../config";
import WavingHand from "../assets/svgs/waving-hand.svg";

export default function Home() {
  const companyName = (
    <a href="https://www.nuimarkets.com/" rel="noreferrer" target="_blank">
      Nui Markets
    </a>
  );
  const langs = languages.map((language) => <li>{language}</li>);
  const tool = tools.map((tool) => <li>{tool}</li>);
  const exp = experience.map((e) => (
    <>
      <div className="experience-list">
        <span className="company">{e.company}</span>
        <span className="year hide-for-small">{e.year}</span>
      </div>
      <span className="position">{e.position}</span>
    </>
  ));
  const edu = education.map((e) => (
    <>
      <div className={e.id}>
        <span className="career">{e.study}</span>
        <span className="year hide-for-small">{e.year}</span>
      </div>
      <span className="major">{e.major}</span>
    </>
  ));

  return (
    <main>
      <Section className="introduction">
        <div className="title">
          <h2 className="hey">Hey there&#33;</h2>
          <p>
            My name is <span className="name">Bond Trinh</span>. I am a junior
            software engineer passionate about learning frontend development.
          </p>
        </div>
        <p className="get-in-touch">
          Get in touch with me <img src={WavingHand} alt="Waving hand emoji" />
          <a href="mailto:bond.nicktrinh@gmail.com">bond.nicktrinh@gmail.com</a>
        </p>
      </Section>

      <Section className="background">
        <div className="list">
          <div className="about-me">
            <h3 className="title">Background</h3>
            <p>
              I recently graduated from Auckland University of Technology with a
              degree in Bachelor of Computer and Information Sciences, majoring
              in Software Development. I am currently a junior frontend
              developer at {companyName} constantly learning new skills such as
              automation testing. When I'm not working, I'm either at the gym,
              hanging out with friends, or upskilling my programming skills.
            </p>
          </div>

          <div className="experience">
            <h3 className="title">Experience</h3>
            <div className="list-item">{exp}</div>
          </div>

          <div className="education">
            <h3 className="title">Education</h3>
            <div className="list-item">{edu}</div>
          </div>

          <div className="skills">
            <h3 className="title">Languages &amp; Frameworks</h3>
            <ul>{langs}</ul>
          </div>

          <div className="tools">
            <h3 className="title">Tools</h3>
            <ul>{tool}</ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
