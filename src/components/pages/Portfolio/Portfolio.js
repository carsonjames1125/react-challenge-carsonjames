// portfolio section
//importing needed materials from the UI and files

import React from "react";
import Grid from "@mui/material";
import './Portfolio.css';
import Card from "@mui/material";
import CardActions from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { projects } from '../../../projects';

// this function with create the cards and how they will display within the portfolio section that contains the projects I will share to the page

export function Project({ project }) {
    return (
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 350 }} style={{ backgroundColor: 'lightblue' }}>
                <CardMedia
                    component='img'
                    height='150'
                    image={project.imageLink}
                />
                <CardContent>
                    <Typography component='div'>
                        {project.projectTitle}
                    </Typography>
                    <Typography color='yellow'>
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button
                    id="portfolio-button"
                    className='on-hover'
                    href={project.liveLink}
                    size="small"
                    >
                        Live Web URL
                    </Button>
                    <Button
                    id="portfolio-button"
                    className="on-hover"
                    href={project.gitHub}
                    size="small"
                    >
                        GitHub
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

//function to overwrite project.js array 

export default function Work() {
    return (
        <div style={{ paddingLeft: '35px', paddingRight: '35px' }}>
            <h1 style={{ display:'flex', justifyContent:'center' }}>Portfolio</h1>
            <Grid 
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {Array.from(Array(6)).map((_, index)=> (
                    <Grid item xs={2} sm={4} md={4} key={index}></Grid>
                ))}
                {projects.map((project, index)=> (
                    <Project project={project} key={index} />
                ))}
            </Grid>
        </div>
    );
}

