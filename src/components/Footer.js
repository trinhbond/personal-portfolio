import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ display: "flex", position: "relative", bottom: "0", width: "100vw", padding: "4px 0px 4px 0px" }}>
      <AppBar 
        component="footer" 
        style={{
          position: "absolute", 
          bottom: "0", 
          textAlign: "center", 
          justifyContent: "center", 
          backgroundColor: "#ffffff",
          boxShadow: "none",
        }}>
        <Typography sx={{ 
          color: "#000000", 
          textTransform: "uppercase",
        }}>
          &copy; 2022 Bond Trinh
        </Typography>
      </AppBar>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
  </Box>
  )
}

export default Footer;