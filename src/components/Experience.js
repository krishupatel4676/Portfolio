import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - 2021</h3>
            <h5>COMPUTER PROGRAMMER</h5>
            <h6>Algonquin College </h6>
            <p>Designed tin-dog application using HTML, CSS, JavaScript, Bootstrap, jQuery, Document Object Model, wireframing, etc.    </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>2018 - 2019</h3>
            <h5>JUNIOR WEB DEVELOPER</h5>
            <h6>Megh Infotech, Gujarat, India</h6>
            <p>Worked as junior front-end developer. As a part of a team, Built an e-commenrce website using different web development tools and technologies.Used react components, redux, custom hooks, etc. Created a firebase databse to store all the details of the products.    </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>2017 - 2018</h3>
            <h5>FRONT_END DEVELOPER(Co-op)</h5>
            <h6>WebCoin Infotech, Gujarat, India</h6>
            <p>Developed an online shopping cart application using the javaScript and react. Worked with different components rendering methods. </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>2014 - 2018</h3>
            <h5>BCHLOR'S OF COMPUTER ENGINEERING</h5>
            <h6>Sigma Institute Of Engineering </h6>
          </div>
        </div>
     
        
      </div>
    </div>
  )
}

export default Experience;
