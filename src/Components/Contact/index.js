import React from 'react';
import Socials from '../Socials';
import './_Contact.scss';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="section-header">Contact Me</h2>
            <div className="contact-div">
                <h1 className="big-contact-font">Say Hello!</h1>
                <p className="contact-text">My inbox is always open. If you have any questions or would like to say hello, drop me an email! I'll get back to you as soon as I can. </p>
                <a href="mailto: isaq98@gmail.com"><button className="contact-button">Email Me</button></a>
            </div>
            <Socials />
        </section>
    )
}

export default Contact;