import React from "react";
import Header from "../componant/Header/Header";
import Project from "../componant/project/Project";
import Banner from "../componant/banner/Banner";
import Footer from "../componant/footer/Footer";
import PageTop from "../UI/PageTop";
import ProjectDetails from "../componant/project/ProjectDetails";
function ProjectPage() {
  return (
    <>
      <PageTop
        TopTitle="Wellcome to project page"
        TopDesc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget orum ultricies, ipsum nunc sodales ipsum, eu ultrices libero nunc eget "
      />
      <ProjectDetails></ProjectDetails>
      <Header></Header>
      {/* <Project></Project> */}
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}

export default ProjectPage;
