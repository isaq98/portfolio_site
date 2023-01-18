import React from 'react';
import './_Contact.scss';

function Contact() {
    return (
        <section className="contact">
            <h2 className="section-header">Contact Me</h2>
            <div className="contact-div">
                <h1 className="big-contact-font">Say Hello!</h1>
                <p className="contact-text">I'm always open to making new connections. If you have any questions or would like to say hello, drop me an email! I'll get back to ya as soon as I can! </p>
                <button className="contact-button">Get in Touch</button>
            </div>
        </section>
    )
}

export default Contact;