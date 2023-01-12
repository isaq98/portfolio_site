import React from 'react';
import './_Overview.scss';

function Overview(props) {
    return (
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
                    <p>I'm a software engineer specializing in frontend technology to create elegant online experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default Overview;