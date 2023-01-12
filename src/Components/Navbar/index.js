import React from 'react';
import './_Navbar.scss';

function Navbar() {
    return (
        <div className="navigation-bar">
            <div className="logo">I am a logo</div>
            <div className="navigation-list-container">
                <ul className="navigation-list">
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;