import React from "react";

import PopUp from "./common/popUp";
import CloseButton from "./common/closeButton";

import "../assets/css/navbar.css";

const PhonePopup = ({ open, popUpId, toggle }) => {
  return (
    <PopUp open={open} className="show-mobile" popUpId={popUpId}>
      <CloseButton onClose={toggle} />
      <div style={{ padding: "5%" }}>
        <strong>Give us a call?</strong>
        <div id="phone-box">
          <a className="btn btn-primary" href="tel:6159056292">
            Yes
          </a>
          <button className="btn btn-danger" onClick={toggle}>
            No
          </button>
        </div>
      </div>
    </PopUp>
  );
};

export default PhonePopup;
