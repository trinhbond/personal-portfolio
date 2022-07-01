import React from 'react';
import "../styles/Projects.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function Projects() {
    document.title = "Projects - Bond Trinh";
    
    return (
    <div className="container">
        <section>
            <Card sx={{ maxWidth: 400, height: 250 }}>
                <CardActionArea sx={{justifyContent:"center", textAlign:"center" }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div"sx={{fontWeight: "bold"}}>
                    Technical School Application
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The Technical School App determines whether or not a student is certified, 
                    their transcript is checked against a certification criterion. Consists of 
                    classes to store data for modules, students, and their transcripts.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:"center", textAlign:"center", position:"relative", top: "44px" }}>
                    <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                    Java
                    </Button>
                    {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                        <a href="/Projects/TechnicalSchoolApp.7z" download><DownloadIcon fontSize="large" sx={{backgroundColor: "black", border: "1px solid black", borderRadius: "8px" }}/></a>
                    </Button> */}
                </CardActions>
            </Card>
        </section>
        <section>
        <Card sx={{ maxWidth: 400, height: 250 }}>
            <CardActionArea sx={{justifyContent:"center", textAlign:"center" }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div"sx={{fontWeight: "bold"}}>
                    Diary System for a Social Networking Site
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The diary system allows users to post their status and save it to a database.
                    These posted details can also be retrieved using text matching and all matched
                    status reports can be viewed in the order they are posted.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ position:"relative", top: "12px" }}>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                HTML
                </Button>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                CSS
                </Button>                    
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                JavaScript
                </Button>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                PHP
                </Button>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                MySQL
                </Button>
                {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                    <a href="/Projects/assign1.7z" download><DownloadIcon fontSize="large" sx={{backgroundColor: "black", border: "1px solid black", borderRadius: "8px" }}/></a>
                </Button> */}
            </CardActions>
        </Card>
        </section>
        <section>
        <Card sx={{ maxWidth: 400, height: 250 }}>
            <CardActionArea sx={{justifyContent:"center", textAlign:"center" }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div"sx={{fontWeight: "bold"}}>
                    Booking Application for Cabs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The booking application allows users to book a cab entering their personal details
                and their time of choosing. These booking details can also be retrieved using text matching
                and bookings made within 2 hours of the current time can be viewed in the order they are booked.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ position:"relative", top: "24px" }}>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                HTML
                </Button>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                CSS
                </Button>                    
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                JavaScript
                </Button>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                PHP
                </Button>                    
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                MySQL
                </Button>
                {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                    <a href="/Projects/assign1.7z" download<DownloadIcon fontSize="large" sx={{backgroundColor: "black", border: "1px solid black", borderRadius: "8px" }}/></a>
                </Button> */}
            </CardActions>
        </Card>
        </section>
        <section>
        <Card sx={{ maxWidth: 400, height: 250 }}>
            <CardActionArea sx={{justifyContent:"center", textAlign:"center" }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div"sx={{fontWeight: "bold"}}>
                    Mern Stack Application for a Books List
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The booking application allows users to book a cab entering their personal details
                and their time of choosing. These booking details can also be retrieved using text matching
                and bookings made within 2 hours of the current time can be viewed in the order they are booked.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent:"center", textAlign:"center", position:"relative", top: "24px" }}>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                React.js
                </Button>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                JavaScript
                </Button>
                <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                GitHub
                </Button>  
                {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                    <a href="https://heroku-mern-app.herokuapp.com/" target="blank">View Application</a>
                </Button> */}
            </CardActions>
        </Card>
        </section>
        <section>
        <Card sx={{ maxWidth: 400, height: 250 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div"sx={{fontWeight: "bold"}}>
                        This Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        The purpose of this website is to showcase my projects and skills, and tell you a little about myself.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display:"inline", position:"relative", top: "64px" }}>
                    <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                    React.js
                    </Button>
                    <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                    JavaScript
                    </Button>                    
                    <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none"}}>
                    HTML
                    </Button>
                    <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none",  pointerEvents: "none"}}>
                    CSS
                    </Button>
                    <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none"}}>
                    Material UI
                    </Button>
                    <Button size="small" color="primary" sx={{ color:"black", backgroundColor: "none", pointerEvents: "none" }}>
                    GitHub
                    </Button>  
                    {/* <Button size="small" color="primary" sx={{ backgroundColor: "none",  }}>
                        <a href="https://github.com/bondtrinh1/personal-portfolio" target="blank">View GitHub Repository</a>
                    </Button> */}
                </CardActions>
            </Card>
        </section>
    </div>
    )
}
