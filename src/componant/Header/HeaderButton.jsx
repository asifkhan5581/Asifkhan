import React from "react";
import Button from "../../UI/Button";
import resume from "../../../public/Asifkhan update cv.pdf";
function HeaderButton() {
  return (
    <>
      <a href={resume} download={"Asifkhan"}>
        <Button>Download resume</Button>
      </a>
    </>
  );
}

export default HeaderButton;
