import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JustinFinal from '../images/JustinFinal.jpg'; // Correct the path if needed

const AboutMe = () => {
    return (
    <section id="about-me">
        <h2>About ME</h2>
        <img src={JustinFinal} alt="justin ramirez" />
        <p>Coding student and proud dog dad. Educated at Rutgers for undergrad and full stack. I enjoy helping animals 
          keeping up to date with new technologies </p>
    </section>
    );
};

export default AboutMe;
