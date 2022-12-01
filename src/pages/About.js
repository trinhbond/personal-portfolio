import React from "react";
import "../styles/About.css";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

function About() { 
  const technologies = [
    'Java', 'C', 'C#', 'PHP', 'HTML', 'CSS', 'MongoDB', 'Express', 
    'React', 'Node', 'Bootstrap','Material-UI', 'GitHub', 'GitLab'
  ]

  const listItems = technologies.map(item => <li>{item}</li>)

  return (
    <Container className="About-Me">
      <Typography variant="h1" component="h1">About Me</Typography>
      <Typography variant="body2" id="aboutMeParagraph">
          I am a Software Development major in my final year at Auckland University of Technology
          studying a Bachelor of Computer and Information Sciences. During my second year at AUT, I realised that my passion lies in web development. Since then, I have been able to learn a lot about frontend and backend development by working with technologies such as React. Apart from playing video games and hanging out 
          with friends in my spare time, I enjoy creating meaningful projects such as this website. I am currently focusing on a Research and Development Project 
          where I am working with 6 other members to develop a proof of concept android application for Kumeu River Wines. The application 
          will use real-time climatic data to predict dangerous weather events such as frost that are damaging to their vineyards.
        </Typography>
        <Typography variant="body2" id="listHeading">
          Technologies I've worked with:
        </Typography>
        <ul>{listItems}</ul>
  
    </Container>
  )
}

export default About;