import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Portfolio = () => {
    const projects = [
        { title: 'Weather Dashboard', image: 'https://example.com/weather-dashboard.png', deployedLink: 'https://example.com/weather-dashboard' },
        { title: 'Weather Dashboard', image: 'https://example.com/weather-dashboard.png', deployedLink: 'https://example.com/weather-dashboard' },
        { title: 'Weather Dashboard', image: 'https://example.com/weather-dashboard.png', deployedLink: 'https://example.com/weather-dashboard' },
        { title: 'Weather Dashboard', image: 'https://example.com/weather-dashboard.png', deployedLink: 'https://example.com/weather-dashboard' },
        { title: 'Weather Dashboard', image: 'https://example.com/weather-dashboard.png', deployedLink: 'https://example.com/weather-dashboard' }
        // Add more project objects here...
    ];

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <figure>
                            <img src={project.image} alt={project.title} />
                            <figcaption>{project.title}</figcaption>
                        </figure>
                        <div>
                            <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View App</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
