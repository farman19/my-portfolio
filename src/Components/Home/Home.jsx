import React from "react";
import './Home.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () =>{
    return(
        <div id="home" className="home">
            <h1><span>I'm Mohd Farman,</span> Full Stack Devloper in INDIA.</h1>
            <p>I am a Full Stack Developer from   SHAMLI</p>
            <div className="home-action">
                <div className="home-connect"><AnchorLink className="anchore-link" href="#contact">Connect with me</AnchorLink></div>
                <div className="home-resume">My-resume</div>
            </div>
        </div>
    )
}
export default Home;