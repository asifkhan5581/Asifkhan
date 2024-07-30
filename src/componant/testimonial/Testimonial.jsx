import React, { useEffect, useState } from "react";
import module from "./testimonial.module.css";
import TestimonialData from "./TestimonialData";

import { PiArrowUDownLeftBold } from "react-icons/pi";
import { HiOutlineArrowUturnRight } from "react-icons/hi2";

function Testimonial() {
  const [slideIndex, setslideIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setslideIndex((preIndex) => (preIndex + 1) % TestimonialData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  // show the card
  const showCard = 2;
  const handleLeft = () => {
    setslideIndex((preIndex) => {
      return slideIndex > 0 ? preIndex - 1 : TestimonialData.length - 1;
    });
  };
  const handleRight = () => {
    setslideIndex((preIndex) => {
      return slideIndex < TestimonialData.length - 1 ? preIndex + 1 : 0;
    });
  };
  const getVisibilty = () => {
    const endPoint = slideIndex + showCard;
    return TestimonialData.slice(slideIndex, endPoint);
  };
  return (
    <>
      <div className={module.main_testimonial} data-aos="fade-up-right">
        <h1>What people say</h1>
        <div className={module.testIcon}>
          <div className={module.leftIcon} onClick={handleLeft}>
            <PiArrowUDownLeftBold />
          </div>
          <div className={module.leftIcon} onClick={handleRight}>
            <HiOutlineArrowUturnRight />
          </div>
        </div>
        <div className="container">
          <div className="row">
            {getVisibilty().map((data, index) => {
              return (
                <div
                  className="col-12 col-sm-12 col-md-6 col-xl-6 d-flex mt-5"
                  key={index}
                  data-aos="fade-up-down"
                >
                  <div
                    className={`${index === slideIndex ? "active" : ""} ${
                      module.card
                    }`}
                  >
                    <div className={module.main_head}>
                      <img src={data.image} alt="" />
                      <h3>{data.name}</h3>
                      <p>{data.designation}</p>
                    </div>
                    <div className={module.main_text}>
                      <p>{data.review}</p>
                    </div>
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

export default Testimonial;
