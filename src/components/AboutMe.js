import React from "react";


const AboutMe = () => {
  return (
    <div  className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164785149/original/947e8d15b861648d3b2fbe8862dcc1ba12df4e78/do-any-code-on-html-css-javascript-jquery.png" alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            <h5>HI THERE!</h5>
            <p>
              {" "}
              I'm <strong>Krishna</strong>, a junior software developer in
              Ottawa, Ontario.{" "}
            </p>
            <p>
              I am a graduate student in the Computer Programming at Algonquin
              College in May 2021.I have a Bachelor of Computer Engineering
              degree from the Indian Institute of Technology(GTU). I have a
              diverse set of skills, ranging from design, to HTML, CSS,
              Javascript, TypeScript,AJAX, Bootstrap, JSON, jQuery, React.js,
              Node.js, etc.{" "}
            </p>
            <p>
              {" "}
              I have an experience in building User Interfaces and Interactive
              software products. I love spending time on fixing bugs and
              optimizing a web apps. Moreover, I like working in a team as well as
              individual. I have an excellent troubleshooting skill, problem-solving,
              Analytical and Design, and Communication skill.
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
