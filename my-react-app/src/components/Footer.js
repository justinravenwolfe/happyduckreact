import React from 'react';
import {Navbar} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return(
        <footer>
         <Navbar bg = "dark" variant = "dark">   
            <p> Connect with me: </p>
            <ul className = "row">
                <li>My Github Username: </li>
                <li> My linkedin: </li>
            </ul>
            </Navbar>
        </footer>
    );
};

export default Footer;

