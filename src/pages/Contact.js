import React from "react";
import "../styles/Contact.css";
import { Container, Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

export default function Contact() {
    // document.title="Contact - Bond Trinh"
    return (
    <Container className="Content">
      <Box>        
        <Typography variant="h1" component="h1">
          Get In Touch
        </Typography>
        <Typography variant="body2">
        For work opportunities or inquiries, feel free to contact me 
          and I will get back to you as soon as possible.
        </Typography>
        <Button className="ContactButton" href="mailto:bond.nicktrinh@gmail.com">Say Hello</Button>
      </Box>
    </Container>
  )
}
