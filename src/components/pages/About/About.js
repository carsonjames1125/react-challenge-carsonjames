import React from "react";

import './About.css';

import hero from "../../../../images/hero.png";

import CardMedia from "@mui/material/CardMedia";

// render about page

export default function About() {
    return(
        <>
        <div className="image-container">
            <CardMedia
            component="img"
            className="color-img"
            style={{
                height: 'auto',
                width: '40%',
                margin: '0 auto',
                paddingTop: '15px',
            }}
            image={hero}
            alt='About Me Photo'
            />
        </div>

        <div style={{ width: '65%', margin: '0 auto' }}>
            <h1 id='about-me-title'>About Me</h1>
            <p id='p-about'>
                Hi! My name is Carson James, I am a full stack web developer. I have a background in Sales and Exercise Science. I think those are great experiences to have because both fields have ever changing information to learn and adapt just like the world od coding. I am always ready to learn new ideas and practices and incorporate them into my everyday work.
            </p>
            <p id='p-about'>
                I have a degree in Exercise Science and experience in sales, I am able to think and adapt to differnet scenarios and evolve my thinking and execute procedures to resolve the issue. Situations can become complex and stressful, but my background allows me to handle them calmly and efficiently. With sales, I think it'll also help with satisfying consumer needs and making sure that they well taken care of in a proper manner. 
            </p>
        </div>
        </>
    );
}