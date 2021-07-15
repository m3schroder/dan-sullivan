import React from "react";
import Collapse from "react-bootstrap/Collapse";

const PopUp = ({ open, popUpId, children }) => {
  return (
    <Collapse in={open}>
      <div id={popUpId}>{children}</div>
    </Collapse>
  );
};

export default PopUp;
