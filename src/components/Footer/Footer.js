// imports needed for footer

import React from "react";
import Grid from '@mui/material/Grid'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

// create the footer with a function

const Footer = () => {
    return (
        <div style={{ paddingTop: '25px', paddingBottom: '25px' }}>
            <Grid
             style={{ display: 'flex', justifyContent: 'center' }}
             container
             sx={{ color: "lightyellow" }}
             >
                <Grid
                style={{ display: 'flex', justifyContent: 'space-evenly' }}
                item
                xs={4}
                >
                    <LinkedInIcon
                        id='icon'
                        className="on-hover"
                        sx={{ fontSize: 45 }}
                        onClick={(event) => 
                            (window.location.href = 
                                'https://www.linkedin.com/in/carson-james-1604301b6/')
                    }
                    />
                    <GitHubIcon
                        id='icon'
                        className="on-hover"
                        sx={{ fontSize: 45 }}
                        onClick={(event) => 
                            (window.location.href = 'https://github.com/carsonjames1125')
                    }
                    />
                    <EmailIcon
                        id="icon"
                        className="on-hover"
                        sx={{ fontSize: 45 }}
                        onClick={(event) => 
                            (window.location.href = 'mailto:tarheelkid44@yahoo.com')
                    }
                    />
                </Grid>
             </Grid>
        </div>
    );
};

export default Footer;
