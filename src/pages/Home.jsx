import React from "react";
import Header from "../componant/Header/Header";
import AboutHome from "../componant/About/AboutHome";
import Skill from "../componant/Skills/Skill";
import Project from "../componant/project/Project";
import Counter from "../componant/counter/Counter";
import Testimonial from "../componant/testimonial/Testimonial";
import Banner from "../componant/banner/Banner";
import Tuch from "../componant/Tuch/Tuch";
import Footer from "../componant/footer/Footer";
import Hero from "../componant/Header/Hero";
function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutHome></AboutHome>
      <Skill></Skill>
      <Project></Project>
      <Counter></Counter>
      <Testimonial></Testimonial>
      <Banner></Banner>
      <Tuch></Tuch>
      <Footer></Footer>
    </>
  );
}

export default Home;
