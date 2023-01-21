import React from 'react';
import './_About.scss';

function About() {
    return (
        <section className="about" id="about">
            <h2 className="section-heading">About</h2>
            <div className="about-me-container">
                <div className="photo-container">
                    <img
                     className="img"
                     width={310}
                     height={450}
                     src={require("../../Images/me.jpg")}
                     alt="Sameer"
                    />
                </div>
                <div className="snippet-container">
                    <h4>"Why not?"</h4>
                    <p>This was the question I asked myself in 2017 when advised to take a computer science class in university despite having no experience. Turns out being pushed into the ocean isn't the worst way to learn how to swim.</p>
                    <p>After initial classes, my interest in web development truly began in 2019 after taking a data visualization course. Bridging the gap between raw data
                    and user interfaces quickly became an exciting and fulfilliing goal. This was cemented when I was placed by my fellow classmates in the lead frontend role for my capstone project.</p>
                    <p>Since graduating, I've had the privilege of working for my alma mater and a small, health-tech startup. My primary focus as I continue to grow is building inclusive
                    products while also using my knowledge in my own personal projects.</p>
                    <p>Here's a list of some of my recent technologies: </p>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Sass</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;