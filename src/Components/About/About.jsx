import React from "react";
import './About.css'

const About = () =>{
    return(
        <div  id="about"className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a experienced Full Stack Developer with over a decode of professional expertise in the field.
                            Throughout my career.I have had the privilege of collaborating with prestigious organization,
                            contributing to their succes and growth.
                        </p>
                        <p>My passion for full stack Development is not only reftected in my extensive experience but also in the enthusiasm and dedication I being to each project</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}}/></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{width: "55%"}}/></div>
                        <div className="about-skill"><p>Express</p><hr style={{width: "58%"}}/></div>
                        <div className="about-skill"><p>Firebase & MonogoDB</p><hr style={{width: "59%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>14+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About;