import React from "react";
import module from "./banner.module.css";
import { FaRegPaperPlane } from "react-icons/fa";
import Button from "../../UI/Button";

function Banner() {
  return (
    <div className={module.banner} id="banner" data-aos="fade-down">
      <div className={module.banner__content} id="banner__content">
        <FaRegPaperPlane className={module.banner_icon} />
        <div className={module.banner_text} data-aos="fade-right">
          <h1>HIRE ME FOR YOUR AWESOME PROJECT</h1>
          <p>
            I am available for Freelance projects that depends on your project
            value. Hire me and get your project done!
          </p>
          <Button>Let's Talk</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
