import React from "react";
import module from "./tuch.module.css";
import Card from "../../UI/Card";
import hands from "../../Images/hande.jpg";

import TuchIcon from "./TuchIcon";
function TuchContant() {
  return (
    <>
      <div className={module.Main_tuch} data-aos="fade-up-right">
        <div className={module.TuchContant} data-aos="fade-up-left">
          <h1>Asif khan</h1>
          <h3>Website developer</h3>
          <p>
            I am available for freelance work. Contant with me via call into my
            account
          </p>
        </div>
        <Card>
          <div className={module.tuch_Side_contant}>
            <img src={hands} alt="" />
            <div className={module.number}>
              <h4>Phone: </h4>
              <p>+92 302 5581295</p>
            </div>
            <div className={module.email}>
              <h4>Email:</h4>
              <p>asifkhan76017@gmail.com</p>
            </div>
          </div>
          {/* icon */}
          <TuchIcon></TuchIcon>
        </Card>
      </div>
    </>
  );
}

export default TuchContant;
