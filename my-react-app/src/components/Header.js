import React from 'react';
import {Navbar} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
//HTML 
    return (
        <header>
        <Navbar bg = "dark" variant = "dark" id = "header-responsive">
            <Navbar.Brand><strong>Happy Duck</strong></Navbar.Brand>
            <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/1200px-Baseball_%28crop%29.jpg" alt = "baseball" height = "30" width = "30"></img>
            <li>  <Link to="/" >About Me</Link></li> 
            <li>  <Link to="/portfolio" >Portfolio</Link></li> 
            <li>  <Link to="/contact" >Contact</Link></li> 
            <li>  <Link to="/resume" >Resume</Link></li> 
        
        </Navbar>
        </header>
    ); 
};
export default Header; 