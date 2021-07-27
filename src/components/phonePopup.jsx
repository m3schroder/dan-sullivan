import React from "react";

import PopUp from "./common/popUp";

import "../assets/css/navbar.css";

const PhonePopup = ({ open, popUpId, toggle }) => {
  return (
    <PopUp open={open} className="show-mobile" popUpId={popUpId}>
      <div id="close-phone">
        <button onClick={toggle} className="btn">
          X
        </button>
      </div>
      <h2>Give us a call?</h2>
      <div id="phone-box">
        <a className="btn btn-primary" href="tel:6159056292">
          Yes
        </a>
        <button className="btn btn-danger" onClick={toggle}>
          No
        </button>
      </div>
    </PopUp>
  );
};

export default PhonePopup;
