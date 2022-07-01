import React from 'react';
import "../styles/Footer.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
  <Box sx={{ display: 'flex', position: "absolute", bottom: "0", width: "100vw" }} >
    <AppBar component="footer" style={{ padding: "15px 10%", position: "absolute", bottom: "0", width: "100vw", textAlign:"center", justifyContent: "center", backgroundColor: "#ffffff" }}>
      <Typography sx={{color: "#000000"}}>&copy; 2022 Bond Trinh</Typography>
    </AppBar>
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
    </Box>
  </Box>
  )
}

export default Footer;