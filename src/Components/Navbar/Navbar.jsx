import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import './Navbar.css'

const Navbar = ()=>{
    const [setmenu] = useState()
    return(
        <div className="navbar">
            <ul className="nav-menu">
                <li><AnchorLink className="anchore-link" href="#home"><p onClick={()=>setmenu('home')}>Home</p></AnchorLink></li>
                <li><AnchorLink className="anchore-link" href="#about"><p onClick={()=>setmenu('about')}>About Me</p></AnchorLink></li>
                <li><AnchorLink className="anchore-link" href="#service"><p onClick={()=>setmenu('service')}>Services</p></AnchorLink></li>
                <li><AnchorLink className="anchore-link" href="#portfolio"><p onClick={()=>setmenu('portfolio')}>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className="anchore-link" href="#contact"><p onClick={()=>setmenu('contact')}>Contact</p></AnchorLink></li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchore-link" href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}
export default Navbar;