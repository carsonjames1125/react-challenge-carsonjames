// importing pieces for the Resume section

import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material/Button";
import pdfFile from '../../../CarsonJamesResume.pdf';
import "./Resume.css";

//this function will allow the resume i have provided to be downloadable
// exporting the function as well

export default function Resume() {
    return (
        <Box>
            <div>
                <a 
                    href={pdfFile}
                    download='Carson James Resumé'
                    target="_blank"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '25px',
                    }}
                    ref='noreferror'
                >
                    <Button id='resume-button' className='on-hover'>
                        Download My Resumé 
                    </Button>
                </a>
                <h2
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'underline',
                }}
                >
                    Front-end Proficiencies
                </h2>
                <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: 'center',
                }}
                >
                    - HTML
                     <br></br>- CSS
                     <br></br>- JavaScript
                     <br></br>- JQuery
                     <br></br>- React
                     <br></br>- Bootstrap
                </p>
                <h2
                style={{
                    display:'flex',
                    justifyContent:'center',
                    textDecoration:'underline',
                }}
                >
                    Back-end Proficiencies
                </h2>
                <p 
                style={{
                    display:'flex',
                    justifyContent:'center',
                    paddingRight:'75px',
                }}
                >
                    - HTML
                    <br></br>- API's
                    <br></br>- MySQL
                    <br></br>- Bootstrap
                    <br></br>- Express
                    <br></br>- MongoDB
                    <br></br>- REST
                </p>
            </div>
        </Box>
    );
}