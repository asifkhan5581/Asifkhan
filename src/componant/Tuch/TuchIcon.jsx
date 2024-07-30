import React from "react";
import module from "./tuch.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function TuchIcon() {
  return (
    <>
      <div className={`${module.Social_Icon} ${["mt-5"]}`}>
        <h4>FIND WITH ME</h4>
        <div className={module.social_icon_contant}>
          <span>
            <IoLogoWhatsapp />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </>
  );
}

export default TuchIcon;
