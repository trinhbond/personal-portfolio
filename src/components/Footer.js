import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
  <Box sx={{ display: "flex", position: "absolute", bottom: "0", width: "100vw" }}>
    <AppBar 
      component="footer" 
      style={{
        position: "absolute", 
        bottom: "0", 
        textAlign: "center", 
        justifyContent: "center", 
        backgroundColor: "#caede8",
      }}>
      <Typography sx={{ color: "#000000" }}>&copy; 2022 Bond Trinh</Typography>
    </AppBar>
    <Box component="main" sx={{ p: 1 }}>
      <Toolbar />
    </Box>
  </Box>
  )
}

export default Footer;