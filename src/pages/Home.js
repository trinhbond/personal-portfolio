import React from 'react';
import '../styles/home.css';
import { Box, Typography, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link as Redirect } from 'react-router-dom';

function Home() {
  return (
    <Box 
      id="main" 
      sx={{ 
        display: "flex", 
        padding: "5% 8% 5% 8%", 
        flexDirection:"column", 
        // backgroundColor: "blue", 
        justifyContent: "center", 
        alignItems: "center",
      }}>
        <Box 
          id="main_second" 
          sx={{ 
            display: "inline", 
            width: "100%", 
            margin: "0 auto",
        }}>
          <Box 
            id="home"
            sx={{ 
              flexDirection: "row", 
              // backgroundColor: "lightblue", 
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
            }}>
            <Avatar
              alt="Bond Trinh"
              variant="rounded"
              src="avatar.jpg"
              sx={{ 
                width: 300, 
                height: 300, 
                '@media (max-width: 1024px)' : {
                  width: 250, 
                  height: 250,
                },
                '@media (max-width: 768px)' : {
                  width: 200, 
                  height: 200,
                  alignSelf: "center",
                },
                '@media (max-width: 480px)' : {
                  width: "100%", 
                  height: "50%",
                  alignSelf: "center",
                }
              }}
            />
              <Box 
                id="socials" 
                sx={{
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
                }}>
                  <Typography 
                    variant="h1" 
                    fontWeight={600} 
                    fontSize={75} 
                    sx={{ 
                      letterSpacing: 1, 
                      textTransform: "uppercase",
                      '@media (max-width: 1200px)' : {
                        fontSize: 60

                      } ,
                      '@media (max-width: 768px)' : {
                        fontSize: 60,
                        display: "none"
                      } 
                    }}>
                  Bond Trinh
                  </Typography>
                  <Typography 
                    id="welcomeParagraph" 
                    sx={{ 
                      ml: 0.45, 
                      letterSpacing: 1, 
                      textTransform: "uppercase", 
                      fontSize: 18, 
                      alignSelf: "flex-start",
                      '@media (max-width: 1200px)' : {
                        fontSize: 16

                      } ,
                      '@media (max-width: 768px)' : {
                        fontSize: 14,
                        display: "none"
                      } 
                    }}>
                  Aspiring Software Engineer
                  </Typography>
                  <Box sx={{ 
                      display: "inline", 
                      alignSelf: "flex-start", 
                      mt: 1.5,
                      ml: 0.25,
                      // '@media (max-width: 768px)' : {
                      //   alignSelf: "center"
                      // } 
                    }}>
                    <Link href="https://github.com/bondtrinh1" target="blank" >
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
          <Box sx={{ 
            // backgroundColor: "yellow", 
            padding: "3% 4% 3% 4%", 
            display:  "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
            '@media (max-width: 480px)' : {
              padding: "6% 4% 6% 4%", 
            }
          }}>
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
                                '@media (max-width: 768px)' : {
                                  // fontSize: 14
                                },
                '@media (max-width: 480px)' : {
                  fontSize: 14
                }
              }}>
                I am a final-year Software Development student
                at Auckland University of Technology studying a Bachelor of Computer and
                Information Sciences. I have a fond interest in front-end development because 
                it is a creatively fulfilling process that challenges me to think outside the 
                box and learn new things along the way. The concept of creating software that 
                serves a meaningful purpose excites me which is why I chose a career in technology. 
                I am currently focused on improving my frontend skills using modern technologies such 
                as JavaScript and React. 
              </Typography>
              <Typography sx={{ textTransform: "uppercase", mt: 3 }}>
                Check out my list of <Redirect to="/projects" color="#000">Projects</Redirect>
              </Typography>
            </Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default Home