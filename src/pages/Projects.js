import React from 'react';
import "../styles/Projects.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { 
    CardActionArea, 
    CardActions, 
    createTheme, 
    ThemeProvider, 
    Container,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Projects() {
    document.title = "Projects - Bond Trinh";

    const theme = createTheme({
        breakpoints: {
            values: {
                xxs: 0, // small phone
                xs: 300, // phone
                sm: 600, // tablets
                md: 900, // small laptop
                lg: 1200, // desktop
                xl: 1536 // large screens
            }
        }
    });
    
    return (
    <Container className="projectsContainer" sx={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        padding: "15px 10%",
        paddingBottom: "145px",
        }}>
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "75%" }}>
                <Typography variant="h1" component="h1" sx={{ fontWeight: "bold", textAlign: "center" }}>
                PROJECTS
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center", marginTop: "15px", marginBottom: "30px" }}>
                These are projects that have helped me learn multiple technologies.
                </Typography>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: "bold" }}>
                                    Technical School Application
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    The Technical School App determines whether or not a student is certified, 
                                    their transcript is checked against a certification criterion. Consists of 
                                    classes to store data for modules, students, and their transcripts.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid sx={{ textAlign: "start", padding: "5px" }} container spacing={3}>
                                    <Grid item>
                                        <Typography variant="body2" >Java</Typography>
                                    </Grid>                     
                                </Grid>
                                    {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                                        <a href="/Projects/TechnicalSchoolApp.7z" download><DownloadIcon fontSize="large" sx={{backgroundColor: "black", border: "1px solid black", borderRadius: "8px" }}/></a>
                                    </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    MERN Stack Application for a Books List
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    A simple application using MERN stack that provides the functionality to create a list of books. The application uses HTTP methods 
                                    to add a book to a list and fetch the list of data that displayed via a Mongoose model. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid sx={{ textAlign: "start", padding: "5px" }} container spacing={3}>
                                    <Grid item xs>
                                        <Typography variant="body2">React</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">Express</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">JavaScript</Typography>
                                    </Grid>                    
                                    <Grid item xs>
                                        <Typography variant="body2">HTML</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">CSS</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">GitHub</Typography>
                                    </Grid>
                                </Grid>
                                {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                                    <a href="https://heroku-mern-app.herokuapp.com/" target="blank">View Application</a>
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    Booking Application for Cabs
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    The application allows users to book a cab by entering their personal details
                                    and time of choosing. These booking details can also be retrieved using text matching
                                    and bookings scheduled for 2 hours ahead of the current time can be viewed.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid sx={{ textAlign:"start", padding: "5px" }} container spacing={3}>
                                    <Grid item xs>
                                        <Typography variant="body2" >HTML</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">CSS</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">JavaScript</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">MySQL</Typography>
                                    </Grid>    
                                    <Grid item xs>
                                        <Typography variant="body2">PHP</Typography>
                                    </Grid>                        
                                </Grid>
                                {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                                    <a href="/Projects/assign1.7z" download<DownloadIcon fontSize="large" sx={{backgroundColor: "black", border: "1px solid black", borderRadius: "8px" }}/></a>
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap"}}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    Diary System for a Social Networking Site
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    The diary system allows users to post their status and save it to a database.
                                    These posted details can also be retrieved using text matching and all matched
                                    status reports can be viewed in the order they are posted.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid sx={{ textAlign: "start", padding: "5px" }} container spacing={3}>
                                    <Grid item xs>
                                        <Typography variant="body2">HTML</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">CSS</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">JavaScript</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">PHP</Typography>
                                    </Grid>                        
                                    <Grid item xs>
                                        <Typography variant="body2">MySQL</Typography>
                                    </Grid>                        
                                </Grid>
                                {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                                    <a href="/Projects/assign1.7z" download><DownloadIcon fontSize="large" sx={{backgroundColor: "black", border: "1px solid black", borderRadius: "8px" }}/></a>
                                </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    This Website
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    The purpose of this website is to showcase my projects and skills, and tell you a little about myself. While
                                    developing this website, I'm also learning more as a developer about React, HTML and CSS.
                                    developing this website, I'm also learning more as a developer about React, HTML and CSS.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid sx={{ textAlign: "start", padding: "5px" }} container spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body2">React</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">JavaScript</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">HTML</Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body2">CSS</Typography>
                                    </Grid>                        
                                    <Grid item xs>
                                        <Typography variant="body2">Material UI</Typography>
                                    </Grid>                        
                                    <Grid item xs>
                                        <Typography variant="body2">GitHub</Typography>
                                    </Grid>
                                </Grid>
                                    {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                                        <a href="https://github.com/bondtrinh1/personal-portfolio" target="blank">View GitHub Repository</a>
                                    </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    </Container>
    )
}
