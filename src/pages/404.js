import "../styles/404.css";
import { Container, Typography, Box } from "@mui/material";

function PageNotFound() {
    
    return (
    <Container className="PageNotFound">
      <Box>
        <Typography variant="h1" component="h1">
          404
        </Typography>
        <Typography variant="body2">
          Page Not Found!
        </Typography>
      </Box>
    </Container>
    )
  }

  export default PageNotFound;