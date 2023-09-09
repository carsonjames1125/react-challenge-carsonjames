// importing components for app.js file

import React from "react";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header/Header";
import Footer from  "./components/Footer/Footer";

import { useState } from "react";

// using useState to render the components

const App = () => {

    const [currentPage, setCurrentPage] = useState('About');
    return (
        <div>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <PortfolioContainer
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            <Footer />
        </div>
    );
};

export default App;


