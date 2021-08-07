import React from "react";

import PopUp from "./common/popUp";
import CloseButton from "./common/closeButton";

import "../assets/css/navbar.css";

const PhonePopup = ({ open, popUpId, toggle }) => {
  return (
    <PopUp open={open} className="popup-box" id={popUpId}>
      <CloseButton onClose={toggle} />
      <div style={{ padding: "5%" }}>
        <p>Give us a call?</p>
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
