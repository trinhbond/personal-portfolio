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
import Diary from "../Diary.PNG";
import BooksList from "../BooksList.PNG";
import CabsApplications from "../CabApplication.PNG";
import Website from "../Website.PNG";
import Pokedex from "../Pokedex.PNG";
import Blank from "../Blank.PNG";

function Projects() {

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
            <Box className="Box">
                <Grid className="Grid" container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Grid className="GridItem" item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card sx={{ backgroundColor: "#8ae9fc" }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={Pokedex}
                                alt="Pokedex Website Image"
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="CardTitle" gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    Pokemon List
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px" }} href="https://github.com/bondtrinh1/pokedex" target="blank">
                                        GitHub Source Code
                                    </Button>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px", marginLeft: "10px" }} href="https://pokedex-sepia-ten.vercel.app/" target="blank">
                                        View Application
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                    An application that fetches a list of Pokemons from PokeAPI and displays them in a Grid form. The user can learn more about a Pokemon by clicking on a Pokemon of their choice, 
                                    and their details will be displayed in another page.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid sx={{ textAlign:"start", padding: "5px" }} container spacing={3}>
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
                                        <Typography variant="body2">React Query</Typography>
                                    </Grid>          
                                    <Grid item xs>
                                        <Typography variant="body2">React Router</Typography>
                                    </Grid>                
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid className="GridItem" item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card sx={{ backgroundColor: "#8ae9fc" }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={CabsApplications}
                                alt="Book Application for Cabs Image"
                            />
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="CardTitle" gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    Booking Application for Cabs
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ display: "none", backgroundColor: "black", marginBottom: "12px" }} href="/Projects/assign2.7z" download>
                                        Download Source Code
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                    An application that allows a user to book a cab online. The input is handled using AJAX and is validated through backend code using PHP while maintaining a database with MySQL. The booking details can be retrieved using text matching
                                    and bookings scheduled for 2 hours ahead of the current time can be viewed with a button.
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
                    <Grid className="GridItem" item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card sx={{ backgroundColor: "#8ae9fc" }}>
                            <CardMedia
                                    component="img"
                                    height="250"
                                    image={Diary}
                                    alt="Diary System for a Social Networking Site Image"
                                />
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="CardTitle" gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    Diary System for a Social Networking Site
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px" }} href="/Projects/assign1.7z" download>
                                        Download Source Code
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                    An application that allows a user to post their status and save it to a database. The input is validated through backend code using PHP
                                    and also maintains the database with MySQL.
                                    These posted details can be retrieved using text matching and all matched
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
                    <Grid className="GridItem" item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card sx={{ backgroundColor: "#8ae9fc" }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={BooksList}
                            alt="Mern Stack Application Image"
                        />
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="CardTitle" gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    MERN Stack Application for a Books List
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: '12px' }} href="https://heroku-mern-app.herokuapp.com/" target="blank">
                                        View Application
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                    A web simple application that provides the functionality to create a book and add it to a list. 
                                    The application uses MERN stack to construct a 3-tier architecture that includes frontend, backend and database.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid sx={{ textAlign: "start", padding: "5px" }} container spacing={3}>
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
                                        <Typography variant="body2">GitHub</Typography>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid className="GridItem" item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card sx={{ backgroundColor: "#8ae9fc" }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={Website}
                            alt="This Website Image"
                        />
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="CardTitle" gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    This Website
                                    </Typography>
                                    <Button className="ButtonLink" size="small" color="primary" sx={{ backgroundColor: "black", marginBottom: "12px" }} href="https://github.com/bondtrinh1/personal-portfolio" target="blank">
                                        GitHub Source Code
                                    </Button>
                                    <Typography variant="body2" color="text.secondary">
                                    A web application hosted by Vercel that showcases my skills and projects through the use of multiple technologies. 
                                    This project was also an opportunity for me to improve my knowledge in frontend development.    
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
                    <Grid className="GridItem" item xs={6} sx={{ maxWidth: 400, display: "flex", flexWrap: "wrap" }}>
                        <Card sx={{ backgroundColor: "#8ae9fc" }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={Blank}
                            alt="Blank image"
                        />
                            <CardActionArea>
                                <CardContent>
                                    <Typography className="CardTitle" gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                                    Technical School Application
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                    The Technical School application determines whether or not a student is certified by checking their transcript against a certification criterion.
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

export default Projects