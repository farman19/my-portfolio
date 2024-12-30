import React from "react";
import './Footer.css'

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <p></p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="text" placeholder="Enter your email"/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="foote-bottom-left"> © 2024 Alex Bennett, All rights reserved. </p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;