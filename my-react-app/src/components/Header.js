import React from 'react';
import {Navbar} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
//HTML 
    return (
        <header>
        <Navbar bg = "dark" variant = "dark" id = "header-responsive">
            <Navbar.Brand><strong>Happy Duck</strong></Navbar.Brand>
            <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/1200px-Baseball_%28crop%29.jpg" alt = "baseball" height = "30" width = "30"></img>
            <li><a href = "/">About Me</a></li> 
            <li><a href = "/portfolio">Portfolio</a></li>
            <li><a href = "/contact">Contact</a></li>
            <li><a href = "/resume">Resume</a></li>
        </Navbar>
        </header>
    ); 
};
export default Header; 