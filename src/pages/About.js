import React from "react";
import "../styles/About.css";

function About() { 
  const technologies = [
    'Java', 'C', 'C#', 'PHP', 'HTML', 'CSS', 'React', 'Next JS', 
    'Node', 'Bootstrap','Material-UI', 'GitHub', 'GitLab'
  ]

  const listItems = technologies.map(item => <li key={item}>{item}</li>)

  return (
    <div className='about'>
      <div className='education'> 
        <h2>Education</h2>
        <span className='aut-title'>AUT</span>
        <ul>
          <li>
            Certificate in Science and Technology
          <span>2019</span>

          </li>
          <li>
            Bachelor of Computer and Information Sciences&#44; Software Development
            <span>2020 - 2022</span>
          </li>
        </ul>
      </div>
      <div className='languages'>
        <h2>Languages and Frameworks</h2>
        <span>Some technologies that I've used&#58;</span>
        <ul>
          {listItems}
        </ul>
      </div>
      <div className='experience'>
        <h2>Experience</h2>
        <div className='card'>
          <h3>Nui Markets</h3>
          <span>
            Junior Software Engineer &#x2022; November 2022 - Present
          </span>
          <p>A UX/UI focused role where I write CSS for React components and
            participate in discussions regarding UX/UI decisions
          </p>
        </div>
        <div className='card aut'>
          <h3>AUT Reseach & Development Project</h3>
          <span>
            Frontend Developer &#x2022; February 2022 - November 2022
          </span>
          <p>A year long project with Kumeu River Wines to create an
            android mobile application for a climate monitoring system.
          </p>
          <ul>
            <li>React Native</li>
            <li>Expo</li>
            <li>C++</li>
            <li>Docker</li>
            <li>GitLab</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;