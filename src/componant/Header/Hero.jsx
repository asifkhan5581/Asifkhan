import React, { useEffect, useState } from "react";
import HeroData from "./HeroData";
import module from "./hero.module.css";
import { LuCornerDownLeft } from "react-icons/lu";
import { FiCornerUpRight } from "react-icons/fi";
import HeaderButton from "./HeaderButton";

const slideText = [
  {
    id: 1,
    title: "Crafting Modern Web Experiences",
    description:
      "As a passionate website developer specializing in React.js, I create dynamic and responsive web applications that deliver seamless user experiences.",
  },
  {
    id: 2,
    title: "Innovative Solutions, Tailored for You ",
    description:
      "Leveraging the power of React.js, I build custom websites that are not only visually stunning but also highly functional and optimized for performance.",
  },
  {
    id: 3,
    title: "Transforming Ideas into Reality",
    description:
      " With a strong foundation in React.js, I turn your vision into a reality by developing websites that are both scalable and maintainable, ensuring long-term success.",
  },
];

function Hero() {
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((preInde) => (preInde + 1) % HeroData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const [slideIndex, setSlideIndex] = useState(0);
  const handleLeftClick = () => {
    setSlideIndex((preInde) => {
      return slideIndex > 0 ? preInde - 1 : HeroData.length - 1;
    });
  };
  const handleRightClick = () => {
    setSlideIndex((preInde) => {
      return slideIndex < HeroData.length - 1 ? preInde + 1 : 0;
    });
  };
  return (
    <>
      <div className={module.hero} id="hero">
        {HeroData.map((item, index) => {
          return (
            <div
              className={module.heroImage}
              key={index}
              style={{ display: index === slideIndex ? "block" : "none" }}
            >
              <img src={item} alt="" />
            </div>
          );
        })}
        <div className={module.hero_icon}>
          <LuCornerDownLeft
            className={module.arrow_icon}
            onClick={handleLeftClick}
          />
          <FiCornerUpRight
            className={module.arrow_icon}
            onClick={handleRightClick}
          />
        </div>
        <div className={module.hero_main_text}>
          <h4>
            Hello, I'm <br /> <span>Asif khan</span>
          </h4>
          <h3 className={module.hero_text}>{slideText[slideIndex].title}</h3>
          <p>{slideText[slideIndex].description}</p>
          <div className={module.hero_button}>
            <HeaderButton></HeaderButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
