import React from "react";
import Collapse from "react-bootstrap/Collapse";

const PopUp = ({ open, className, id, children }) => {
  return (
    <Collapse in={open}>
      <div className={className} id={id}>
        {children}
      </div>
    </Collapse>
  );
};

export default PopUp;
