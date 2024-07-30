import React from "react";
import module from "./card.module.css";

function Card({ children }) {
  return (
    <>
      <div className={module.card}>{children}</div>
    </>
  );
}

export default Card;
