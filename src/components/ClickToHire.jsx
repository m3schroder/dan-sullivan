import React from "react";

const PopUp = ({ toggleForm }) => {
  return (
    <button
      className="btn btn-primary click-to-hire"
      onClick={() => toggleForm()}
    >
      Click here to Schedule!
    </button>
  );
};

export default PopUp;
