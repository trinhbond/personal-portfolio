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
        studying a Bachelor of Computer and Information Sciences. During my second year at AUT, I realised that my passion lies in web development. Since then, I have been able to learn a lot about frontend and backend development by working with technologies such as React. Apart from playing video games and hanging out 
        with friends in my spare time, I enjoy creating meaningful projects such as this website. I am currently focusing on a Research and Development Project 
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
            primary={<Typography type="body2">JavaScript</Typography>}
          />
        </ListItem>
        <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemText
            disableTypography
            primary={<Typography type="body2">HTML</Typography>}
          />
        </ListItem>
        <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemText
            disableTypography
            primary={<Typography type="body2">CSS</Typography>}
            />
        </ListItem>        
        <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemText
            disableTypography
            primary={<Typography type="body2">PHP</Typography>}
          />
        </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">React</Typography>}
            />
          </ListItem>     
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">React Native</Typography>}
            />
          </ListItem>      
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">Node.js</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">jQuery</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">Bootstrap</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">Material UI</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">Java</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">C</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">C#</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">GitHub</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              disableTypography
              primary={<Typography type="body2">MySQL</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemText
              disableTypography
              primary={<Typography type="body2">Firebase</Typography>}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2">Android Studio</Typography>}
              />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2">Express</Typography>}
              />
          </ListItem>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
                disableTypography
                primary={<Typography type="body2">MongoDB</Typography>}
              />
          </ListItem>
      </List>
    </Box>
  </Container>
  )
}

export default AboutMe;