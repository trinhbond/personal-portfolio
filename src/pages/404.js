import '../styles/404.css';
import { Container, Typography, Box, Button, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function PageNotFound() {
    return (
    <Container className="container">
      <Box className="main">
        <Typography variant="h1" component="h1">
          404
        </Typography>
        <Typography variant="body2">
          Page Not Found
        </Typography>
        <Button className="button">
          <Link className="link" href="/">Go Home</Link>
        </Button>
        <Box className="social_icons">
          <Link href="https://github.com/bondtrinh1" target="blank" >
            <GitHubIcon fontSize="large" sx={{ color: "#000", mr: 2 }} />
          </Link>
          <Link href="https://www.linkedin.com/in/bond-nick-trinh-a015b420a/" target="blank">
            <LinkedInIcon fontSize="large" sx={{color: "#000", mr: 2 }} />
          </Link>
          <Link href="mailto:bond.nicktrinh@gmail.com">
            <EmailIcon fontSize="large" sx={{ color: "#000" }}/>
          </Link>
        </Box>
      </Box>
    </Container>
    )
  }

  export default PageNotFound;