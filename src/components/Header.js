import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Krishna Patel</h1>
        <Typed
          className="typed-text"
          strings={["Web Developer", "Web Designer", "React Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
         
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">Hire Me</Link>
        
      </div>
    </div>
  )
}

export default Header;
