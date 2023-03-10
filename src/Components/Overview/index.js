import React from 'react';
import Socials from '../Socials';
import './_Overview.scss';

function Overview(props) {
    return (
        <section className="overview">
            <div className="overview-container">
                <div className="about-text">
                    <div className="tiny-hello-div">
                        <h5>Hello, I am</h5>
                    </div>
                    <div className="name-div">
                        <h2>Sameer Isaq.</h2>
                    </div>
                    <div className="statement-div">
                        <h2>I build things for the web.</h2>
                    </div>
                    <div className="paragraph-div">
                        <p>I'm a software engineer specializing in frontend technology to create user friendly online experiences.</p>
                    </div>
                </div>
            </div>
            <Socials />
        </section>
    )
}

export default Overview;