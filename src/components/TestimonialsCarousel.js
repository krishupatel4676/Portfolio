import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Amazon-clone" />
        <div className="myCarousel">
          <h3>Amazon-clone</h3>
          <p>Created Amazon-clone using React, redux, custom hooks, firebase,
            MERN conecpt,etc. Added user Authentication using firebase. Also,
            used stripe method for payments</p>
            <button> <a href="https://amazon-clone-application-react.herokuapp.com/">
            Share
          </a></button>
         <button> <a href="https://github.com/krishupatel4676/amazon-clone">
            GitHub
          </a></button>
        </div>
      </>
      <>
        <img src={avatar2} alt="Linkedin-LandingPage-Clone" />
        <div className="myCarousel">
          <h3>LinkedIn-clone</h3>
          <p>Created linkedin-landing page using react components, hooks and redux. Used firebase database for storing data for the post. </p>
          <button>  <a href="https://linkedin-clone-firebase-data.herokuapp.com/">
            Share
          </a></button>
          <button> <a href="https://github.com/krishupatel4676/linkedin-clone1">
            GitHub
          </a></button>
        </div>
      </>
      <>
        <img src={avatar3} alt="Web development" />
        <div className="myCarousel">
          <h3>Web development</h3>
          <p>Created Different static websites using HTML, CSS, JavaSCript, Bootstrap, jQuery, etc. Developed TIN-DOG website. </p>
           <button> <a href="https://github.com/krishupatel4676/Web-Development">
            GitHub
          </a></button>
        </div>
      </>
      
    </Carousel>
  )
}

export default TestimonialsCarousel;
