import React from "react";
import module from "./tuch.module.css";
import TuchForm from "./TuchForm";
import TuchContant from "./TuchContant";

function Tuch() {
  return (
    <>
      <div className={module.tuch} id="tuch">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-6">
              <TuchContant></TuchContant>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-6">
              <TuchForm></TuchForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tuch;
