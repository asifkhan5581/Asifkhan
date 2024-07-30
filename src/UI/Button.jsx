import React from "react";
import module from "./button.module.css";
function Button({ children }) {
  return (
    <>
      <button className={module.button}>{children}</button>
    </>
  );
}

export default Button;
