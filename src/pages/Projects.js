import React from 'react';
import "../styles/Projects.css";

export default function Projects() {
    document.title = "Projects - Bond Trinh";
    
    return (
    <div className="container">
        <section>
            <h1>Technical School Application</h1>
            <p>The Technical School App determines whether or not a student is certified, 
                their transcript is checked against a certification criterion. Consists of 
                classes to store data for modules, students, and their transcripts.</p>
            <button><a href="/Projects/TechnicalSchoolApp.7z" download>Download Source Code</a></button>
        </section>
        <section>
            <h1>Diary System for a Social Networking Site</h1>
            <p>The diary system allows users to post their status and save it to a database.
                These posted details can also be retrieved using text matching and all matched
                status reports can be viewed in the order they are posted.</p>
            <button><a href="/Projects/assign1.7z" download>Download Source Code</a></button>
        </section>
        <section>
            <h1>Booking Application for Cabs</h1>
            <p>The booking application allows users to book a cab entering their personal details
                and their time of choosing. These booking details can also be retrieved using text matching
                and bookings made within 2 hours of the current time can be viewed in the order they are booked.</p>
            <button><a href="/Projects/assign1.7z" download>Download Source Code</a></button>
        </section>
        <section>
            <h1>Mern Stack Application for a Books List</h1>
            <p>Created using React supported by GitHub and deployed with Heroku</p>
            <p>The purpose of this website is to showcase my projects and skills, and tell you a little about myself.</p>
            <button><a href="https://heroku-mern-app.herokuapp.com/" target="blank">View Heroku Application</a></button>
        </section>
        <section>
            <h1>This Website</h1>
            <p>Created using React, Javascript, and HTML supported by GitHub</p>
            <p id="description">The purpose of this website is to showcase my projects and skills, and tell you a little about myself.</p>
            <button><a href="https://github.com/bondtrinh1/personal-portfolio" target="blank">View GitHub Repository</a></button>
        </section>
    </div>
    )
}
