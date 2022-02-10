import React from "react";

import { CgClose } from "react-icons/cg";

const CloseButton = ({ onClose, iconSize = "20px" }) => {
  return (
    <div onClick={() => onClose()} className="close-btn">
      <CgClose color="grey" size={iconSize} />
    </div>
  );
};

export default CloseButton;
