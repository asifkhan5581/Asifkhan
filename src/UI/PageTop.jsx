import React from "react";
import module from "./top.module.css";
function PageTop(props) {
  return (
    <>
      <div className={module.top}>
        <h1>{props.TopTitle}</h1>
        <p>{props.TopDesc}</p>
      </div>
    </>
  );
}

export default PageTop;
