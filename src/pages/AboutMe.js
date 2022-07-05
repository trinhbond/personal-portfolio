import React from "react";
import "../styles/AboutMe.css";
import { Container, Box } from "@mui/system";
import { Typography, List, ListItem, ListItemText, Stack } from "@mui/material";

function AboutMe() {
  document.title = "About Me - Bond Trinh";
  
  return (
  <Container className="About-Me">
    <Box>        
      <Typography variant="h1" component="h1" sx={{ fontWeight: "bold", textAlign: "center" }}>
      About Me
      </Typography>
      <Typography variant="body2" id="aboutMeParagraph">
      I am a Software Development major in my final year at Auckland University of Technology
        studying a Bachelor of Computer and Information Sciences. Throughout my study at AUT, I have found that my passion lies in web development and that I really enjoy learning frontend and backend development. Apart from playing video games and hanging out 
        with friends, I enjoy creating meaningful projects such as this website. I am currently focusing on a Research and Development Project 
        where I am working with 6 other members to develop a proof of concept android application for Kumeu River Wines. The application 
        will use real-time climatic data to predict dangerous weather events such as frost that are damaging to their vineyards.
      </Typography>
      <Typography variant="body2" id="listHeading">
      Technologies I've worked with:
      </Typography>
      <List component={Stack} spacing={1}>
        <ListItem sx={{ paddingBottom: 0 }} className="text">
          <ListItemText
            disableTypography
            primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>JavaScript</Typography>}
          />
        </ListItem>
        <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>HTML</Typography>}
          />
        </ListItem>
        <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>CSS</Typography>}
            />
        </ListItem>        
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>React</Typography>}
            />
          </ListItem>        
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>Node JS</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>jQuery</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>Bootstrap</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>Material UI</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>Java</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>C</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>C#</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>GitHub</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>MySQL</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemText
              disableTypography
              primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>Firebase</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>Android Studio</Typography>}
              />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>Express</Typography>}
              />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2" sx={{ fontSize: "1.2rem" }}>MongoDB</Typography>}
              />
          </ListItem>
      </List>
    </Box>
  </Container>
  )
}

export default AboutMe;