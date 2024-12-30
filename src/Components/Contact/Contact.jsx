import React from "react";
import './Contact.css'


const Contact = ()=>{
    return(
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get it touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message  about anything that you want me to work on. You cancontact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                               <p>Demo@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <p>+91119181818</p>
                            </div>
                            <div className="contact-detail">
                            <p>SHAMLI, Uttar Pradesh</p>
                            </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Name</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="">Write your message here</label>
                    <textarea type="text" rows="8" placeholder="Enter your message "></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;