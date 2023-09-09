// imports needed for my header

import React from "react";
import Navigation from '../Nav/Navigation';
import './Header.css';


// function creates the header and pulls the data from the navigation file to fill the header

export default function Header ({ currentPage, setCurrentPage }) {
    return (
        <div className="header1" style={{ padding: '0px 0px 8px 35px' }}>
            <p id="header-content">Carson James</p>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}