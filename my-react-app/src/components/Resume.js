import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Resume = () => {
    return (
        <section id="resume">
            <header>
                <h2>Resume</h2>
                <p>Please download my resume</p>
                <a href="sample-resume-link.pdf" download>Download Resume</a>
            </header>
            <div>
                <h3>Skills</h3>
                <ul>
                    <li key="1">React</li>
                    <li key="2">HTML/CSS</li>
                    <li key="3">Node.js</li>
                </ul>
            </div>
        </section>
    );
};

export default Resume;
