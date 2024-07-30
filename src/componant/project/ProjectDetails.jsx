import React from "react";
import ProjectPageData from "./ProjectPageData";
import module from "./pageProject.module.css";

function ProjectDetails() {
  return (
    <>
      <div className={`${module.container} container`} id="project">
        <div className="row">
          {ProjectPageData.map((item) => {
            return (
              <div
                className={`${module.project_data} col-md-6 col-lg-6 col-sm-12`}
                key={item.id}
              >
                <div className={module.full_project}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={module.title}>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
