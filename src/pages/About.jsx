import React from "react";
import Header from "../componant/Header/Header";
import AboutHome from "../componant/About/AboutHome";
import Banner from "../componant/banner/Banner";
import Footer from "../componant/footer/Footer";
import PageTop from "../UI/PageTop";
export default function About() {
  return (
    <>
      <PageTop
        TopTitle="Wellcome to about page"
        TopDesc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget orum ultricies, ipsum nunc sodales ipsum, eu ultrices libero nunc eget "
      />
      <Header></Header>
      <AboutHome></AboutHome>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}
