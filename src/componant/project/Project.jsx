import React, { useState } from "react";
import module from "./project.module.css";
import ProjectData from "./ProjectData";
import ProjectImage from "../../Images/home1.jpg";
import Button from "../../UI/Button";
import MoreProject from "./MoreProject";

function Project() {
  const [showProject, setShowProject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleProjectImage = (index) => {
    setShowProject(showProject === index ? null : index);
  };
  return (
    <>
      <div className={module.project} data-aos="fade-right">
        <h1>Feactured Prejectes</h1>
        <div className="container">
          <div className="row" data-aos="fade-down">
            {showMore ? (
              <MoreProject
                showProject={showProject}
                handleProjectImage={handleProjectImage}
              ></MoreProject>
            ) : (
              <div className="row">
                {ProjectData.map((project, index) => {
                  return (
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-6"
                      key={index}
                      data-aos="fade-right"
                    >
                      <div className={module.cardData}>
                        <div
                          className={module.parjectImage}
                          onClick={() => handleProjectImage(index)}
                        >
                          {showProject === index ? (
                            <img src={project.image} alt="" />
                          ) : (
                            <img src={ProjectImage} alt="" />
                          )}
                        </div>
                        <h3>{project.title}</h3>
                        <span className={module.projectMore}>Know more...</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className=" m-5" onClick={handleShowMore}>
          <Button>{showMore ? "Show Less" : "View All Projects"}</Button>
        </div>
      </div>
    </>
  );
}

export default Project;
