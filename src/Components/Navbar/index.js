import React from 'react';
import './_Navbar.scss';
import useScrollDirection from '../../Utils/useScrollDirection';

function Navbar() {
    const scrollDirection = useScrollDirection();
    return (
        <div className={`navigation-bar ${scrollDirection === "down" ? "hide" : "show"}`}>
            <div className="logo">I am a logo</div>
            <div className="navigation-list-container">
                <ul className="navigation-list">
                    <a href="#about"><li>About</li></a>
                    <a href='#experience'><li>Experience</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
                <div className="resume-button">
                    <a target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;