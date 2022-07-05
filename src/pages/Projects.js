import React from "react";
import "../styles/Projects.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { 
    CardActionArea, 
    CardActions, 
    CardMedia,
    createTheme, 
    ThemeProvider, 
    Container,
    Button,
} from "@mui/material";

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
    <Container className="ProjectsContainer" sx={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        padding: "15px 10%",
        paddingBottom: "145px",
        }}>
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "75%" }} className="Box">
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }} className="Grid">
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }} className="GridItem">
                        <Card sx={{ backgroundColor: "#caede8" }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/Projects/Mern.png"
                            alt="Mern Stack Application Image"
                        />
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }} className="CardTitle">
                                    MERN Stack Application for a Books List
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: '12px' }} href="https://heroku-mern-app.herokuapp.com/" target="blank">
                                        View Application
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                    A simple application using MERN stack that provides the functionality to create a book and add it to a list. The application uses HTTP methods 
                                    to add a book to a list and fetch the list of data that is displayed using a Mongoose model. 
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
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }} className="GridItem">
                        <Card sx={{ backgroundColor: "#caede8" }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/Projects/CabsOnline.png"
                                alt="Book Application for Cabs Image"
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }} className="CardTitle">
                                    Booking Application for Cabs
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px" }} href="/Projects/assign2.7z" download>
                                        Download Source Code
                                    </Button>
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
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }} className="GridItem">
                        <Card sx={{ backgroundColor: "#caede8" }}>
                            <CardMedia
                                    component="img"
                                    height="250"
                                    image="/Projects/Diary.png"
                                    alt="Diary System for a Social Networking Site Image"
                                />
                                <img src={"/Projects/Diary.png"} height={300} alt="test"/>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}  className="CardTitle">
                                    Diary System for a Social Networking Site
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px" }} href="/Projects/assign1.7z" download>
                                        Source Code
                                    </Button>
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
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }} className="GridItem">
                        <Card sx={{ backgroundColor: "#caede8" }}>
                        <CardMedia
                                    component="img"
                                    height="250"
                                    image="/Projects/Portfolio.png"
                                    alt="This Website Image"
                                />
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}  className="CardTitle">
                                    This Website
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px" }} href="https://github.com/bondtrinh1/personal-portfolio" target="blank">
                                        GitHub Source Code
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                    This application is an online portfolio showcasing my skills and projects as a Software Developer. This project is also an opportunity
                                    for me to strengthen my skills in React, HTML, CSS and other technologies. 
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
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }} className="GridItem">
                        <Card sx={{ backgroundColor: "#caede8" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}  className="CardTitle">
                                    Technical School Application
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px" }} href="/Projects/TechnicalSchoolApp.7z" download>
                                        Download Source Code
                                    </Button>
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
                                        <Typography variant="body2">Java</Typography>
                                    </Grid>                     
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    </Container>
    )
}
