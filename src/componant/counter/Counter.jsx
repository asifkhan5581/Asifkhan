import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import module from "./counter.module.css";
function Counter() {
  const [countOn, setcountOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setcountOn(true)}
        onExit={() => setcountOn(false)}
      >
        <div className={module.counter} data-aos="fade-down">
          <div className={module.counterContant} data-aos="fade-down">
            <h1>
              {countOn && (
                <CountUp start={0} end={20} delay={0} duration={5}></CountUp>
              )}
              <span>+</span>
            </h1>
            <h3>Complete Project</h3>
          </div>
          <div className={module.counterContant} data-aos="fade-up-right">
            <h1>
              {countOn && (
                <CountUp start={0} end={2} delay={0} duration={5}></CountUp>
              )}
              +
            </h1>
            <h3>Year of experience</h3>
          </div>
          <div className={module.counterContant} data-aos="fade-up-right">
            <h1>
              {countOn && (
                <CountUp start={0} end={90} delay={0} duration={5}></CountUp>
              )}
              %
            </h1>
            <h3>Happy clients</h3>
          </div>

          <div className={module.counterContant} data-aos="fade-down">
            <h1>
              {countOn && (
                <CountUp start={0} end={20} delay={0} duration={5}></CountUp>
              )}
              +
            </h1>

            <h3>Clients</h3>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default Counter;
