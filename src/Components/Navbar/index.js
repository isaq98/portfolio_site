import React, {useState, useEffect} from 'react';
import './_Navbar.scss';
import useScrollDirection from '../../Utils/useScrollDirection';

function Navbar() {
    const [windowWidth, setWindowWidth] = useState([window.innerWidth]);
    const [hamburgerStatus, setStatus] = useState(false);

    useEffect(() => {
        const resizeWindow = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", resizeWindow);
        return () => {
            window.removeEventListener("resize", resizeWindow);
        }
    });

    const handleClick = () => {
        setStatus((currState) => {
            return currState = !currState;
        })
    }

    const renderAppropriateIcon = () => {
        return ( 
            !hamburgerStatus ? <svg className="hamburger-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 122.879 103.609" enableBackground="new 0 0 122.879 103.609"><g><path fillRule="evenodd" clipRule="evenodd" d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"/></g></svg>
            :
            <div className={`mobile-friendly-navbar`}>
                <svg className="close-mobile-menu-svg" height="35px" width="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775">
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                </svg>
                <nav className="mobile-navigation">
                    <ol className="mobile-navigation-list">
                        <a href="#about"><li>About</li></a>
                        <a href='#experience'><li>Experience</li></a>
                        <a href="#projects"><li>Projects</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ol>
                </nav>
            </div>
        )
    }

    const renderAppropriateNavbar = () => {
        return ( windowWidth > 768 ?
            <>
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
            </> 
            :
            <div className={`hamburger-menu-icon ${hamburgerStatus ? 'active' : ''}`} onClick={() => handleClick()}>
                {renderAppropriateIcon()}
            </div>
        )
    }

    const scrollDirection = useScrollDirection();
    return (
        <div className={`navigation-bar ${scrollDirection === "down" ? "hide" : "show"}`}>
            {renderAppropriateNavbar()}
        </div>
    )
}

export default Navbar;