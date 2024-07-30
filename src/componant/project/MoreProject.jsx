import module from "./project.module.css";
import projectImage4 from "../../Images/project4.png";
import projectImage5 from "../../Images/project5.png";
import projectImage2 from "../../Images/project2.png";
import projectImage3 from "../../Images/project3.png";
import ProjectImage from "../../Images/home1.jpg";
import projectImage1 from "../../Images/project1.png";

const MoreData = [
  {
    id: 1,
    title: "Institute of professional study",
    image: projectImage1,
  },
  {
    id: 2,
    title: "Hashir Security",

    image: projectImage2,
  },
  {
    id: 3,
    title: "Frutibale",
    image: projectImage4,
  },
  {
    id: 4,
    title: "Web Application for Online Shopping",
    image: projectImage5,
  },
  {
    id: 5,
    title: "Hashir Security",
    image: projectImage2,
  },
  {
    id: 5,
    title: "Style Symble",
    image: projectImage3,
  },
];
function MoreProject({ showProject, handleProjectImage }) {
  return (
    <>
      <div className={module.project}>
        <div className="container">
          <div className="row">
            {MoreData.map((project, index) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-6" key={index}>
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
        </div>
      </div>
    </>
  );
}

export default MoreProject;
