import React from "react";
import module from "./about.module.css";
import aboutImage from "../../Images/about.jpg";
import Button from "../../UI/Button";
function AboutHome() {
  return (
    <>
      <div className={module.about} id="about">
        <h1 className={module.aboutTitle}>About Us</h1>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-4 ">
              <p className={module.aboutDescription} data-aos="fade-right">
                As a dedicated website developer, I specialize in creating
                visually appealing and highly functional web applications. My
                expertise spans across HTML, CSS, and Tailwind CSS, allowing me
                to craft responsive and modern user interfaces. With a strong
                foundation in JavaScript, I bring interactivity and dynamic
                features to life, ensuring a seamless user experience.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-4 ">
              <p className={module.aboutDescription} data-aos="fade-down">
                In addition to my front-end skills, I am proficient in React.js
                and Redux, which enable me to build scalable and maintainable
                web applications. By leveraging these powerful tools, I can
                efficiently manage state and create complex applications with
                ease. My goal is to transform your ideas into reality,
                delivering high-quality solutions tailored to your needs.
              </p>
              <div className="m-4">
                <Button>
                  <button className={`${module.aboutbtn}`}>
                    For More Details
                  </button>
                </Button>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-4">
              <img
                src={aboutImage}
                className={module.aboutImage}
                alt="about"
                data-aos="fade-right"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHome;
