import React from 'react';
import '../styles/Home.css';
import { Box, Typography, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link as Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";

const containerStyle = {
  display: "flex", 
  padding: "5% 8% 5% 8%", 
  flexDirection:"column", 
  justifyContent: "center", 
  alignItems: "center"
}

const avatarStyle = {
  width: 300, 
  height: 300, 
  '@media (max-width: 1024px)' : {
    width: 250, 
    height: 250,
  },
  '@media (max-width: 768px)' : {
    width: 200, 
    height: 200,
    alignSelf: "center"
  },
  '@media (max-width: 480px)' : {
    width: "100%", 
    height: "50%",
    alignSelf: "center"
  }
}

const profileContainerStyle = {
  display: "flex", 
  flexDirection:"column", 
  alignItems:"center", 
  justifyContent: "space-evenly", 
  padding: "1% 2% 0% 2%",
  '@media (max-width: 768px)' : {
    justifyContent: "flex-start",
    alignSelf: "center",
    mt: 2
  }
}

const h1Style = { 
  letterSpacing: 1, 
  textTransform: "uppercase",
  fontSize: 75,
  fontWeight: 600,
  '@media (max-width: 1200px)' : {
    fontSize: 60
  },
  '@media (max-width: 768px)' : {
    fontSize: 60,
    display: "none"
  } 
}

const profileSubHeading = { 
  ml: 0.45, 
  letterSpacing: 1, 
  textTransform: "uppercase", 
  fontSize: 18, 
  alignSelf: "flex-start",
  '@media (max-width: 1200px)' : {
    fontSize: 16
  },
  '@media (max-width: 768px)' : {
    fontSize: 14,
    display: "none"
  } 
}

const parentProfileContainer = { 
  flexDirection: "row", 
  alignItems: "center", 
  justifyContent: "flex-start", 
  display: "flex", 
  padding: "20px 4% 20px 4%", 
  '@media (max-width: 768px)' : {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    pb: 1
  } 
}

const childContainerStyle = {
  display: "inline", 
  width: "100%", 
  margin: "0 auto"
}

const iconsContainerStyle = {
  display: "inline", 
  alignSelf: "flex-start", 
  mt: 1.5,
  ml: 0.25
}

const contentContainerStyle = { 
  padding: "3% 4% 3% 4%", 
  display:  "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center",
  '@media (max-width: 480px)' : {
    padding: "6% 4% 6% 4%"
  }
}

function Home() {
  return (
    <Box sx={containerStyle}>
      <Helmet  
        title="Bond Trinh"
        meta={[
          {content: "Projects"}
        ]}
      />
      <Box sx={childContainerStyle}>
        <Box sx={parentProfileContainer}>
          <Avatar
            alt="Bond Trinh"
            variant="rounded"
            src="avatar.jpg"
            sx={avatarStyle}
          />
            <Box sx={profileContainerStyle}>
              <Typography variant="h1" sx={h1Style}>
                Bond Trinh
              </Typography>
              <Typography sx={profileSubHeading}>
                Aspiring Software Engineer
              </Typography>
              <Box sx={iconsContainerStyle}
              >
                <Link href="https://github.com/bondtrinh1" target="blank">
                  <GitHubIcon fontSize="medium" sx={{ color: "#000", mr: 2 }} />
                </Link>
                <Link href="https://www.linkedin.com/in/bond-nick-trinh-a015b420a/" target="blank">
                  <LinkedInIcon fontSize="medium" sx={{color: "#000", mr: 2 }} />
                </Link>
                <Link href="mailto:bond.nicktrinh@gmail.com">
                  <EmailIcon fontSize="medium" sx={{ color: "#000" }}/>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={contentContainerStyle}>
            <Typography>
              <Typography sx={{ 
                fontSize: 30, 
                fontWeight: 600, 
                textTransform: "uppercase",
                '@media (max-width: 480px)' : {
                  fontSize: 20
                }
              }}>
                Hey, I'm Bond
              </Typography>
              <Typography sx={{ 
                '@media (max-width: 480px)' : {
                  fontSize: 14
                }
              }}
              >
                I am a final-year Software Development studentat Auckland University of 
                Technology studying a Bachelor of Computer andInformation Sciences. I have 
                a fond interest in front-end development because it is a creatively fulfilling 
                process that challenges me to think outside the box and learn new things along 
                the way. The concept of creating software that serves a meaningful purpose 
                excites me which is why I chose a career in technology. I am currently focused 
                on improving my frontend skills using modern technologies such as JavaScript and React. 
              </Typography>
              <Typography sx={{ textTransform: "uppercase", mt: 3 }}>
                Check out my list of {" "} 
                <Redirect to="/projects" style={{ textDecoration: "none", fontWeight: 600, color: "#8ae9fc" }}>
                  Projects
                </Redirect>
              </Typography>
            </Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default Home