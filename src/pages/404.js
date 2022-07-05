import "../styles/404.css";
import { Container, Typography, Box } from "@mui/material";

function PageNotFound() {
    document.title = "Page Not Found | Bond Trinh";
  
    return (
    <Container className="Error">
      <Box>
        <Typography variant="h1" component="h1">
          404
        </Typography>
        <Typography variant="body2">
          Page Not Found
        </Typography>
      </Box>
    </Container>
    )
  }

  export default PageNotFound;