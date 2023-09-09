// navigation imports

import React from "react";
import './Navigation.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import useTab from '@mui/base/useTab';


const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

// render navigation tabs and link them to each respective page allowing the state to change

function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
    return (
        <ul 
        className="nav nav-links"
        style={{ paddingRight: '30px', paddingTop: '18px' }}
        >
            <li className="nav-tab">
                <a 
                id="link"
                href='#about'
                onClick={() => setCurrentPage('About')}
                className={currentPage === 'About' ? 'link-on' : 'link'} 
                >
                    About
                </a>
            </li>
            <li className="nav-tab">
                <a
                    id='link'
                    href='#portfolio'
                    onClick={()=> setCurrentPage('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'link-on' : 'link'}
                    >
                    Portfolio
                </a>
            </li>
            <li className="nav-tab">
                <a
                id='link'
                href="#contact"
                onClick={() => setCurrentPage('Contact')}
                className={currentPage === 'Contact' ? 'link-on' : 'link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-tab">
                <a
                id='link'
                href="#resume"
                onClick={() => setCurrentPage("Resume")}
                className={currentPage === 'Resume' ? 'link-on' : 'link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Navigation;