import React from 'react';
import "../styles/AboutMe.css";

function AboutMe() {
  document.title = "About Me - Bond Trinh";
  
  return (
  <div className="About-Me">
    <h1>About Me</h1>
    <p id="aboutMeParagraph">I am a Software Development major in my final year at Auckland University of Technology
      studying a Bachelor of Computer and Information Sciences. My passion lies in web development as I have enjoyed learning about HTML and CSS throughout my degree. Apart from playing video games and hanging out 
      with friends, I enjoy creating meaningful projects such as this website. I am currently focusing on a Research and Development Project 
      where I am working with 6 other members to develop a proof of concept android application for Kumeu River Wines. The application 
      will use real-time climatic data to predict dangerous weather events such as frost that are damaging to their vineyards.</p>
    <p id="listHeading">Here are a few technologies I've been working with recently:</p>
    <ul>
      <li>React</li>
      <li>Node.js</li>
      <li>JavaScript (ES5)</li>
      <li>Android Studio</li>
    </ul>
  </div>
  )
}

export default AboutMe;