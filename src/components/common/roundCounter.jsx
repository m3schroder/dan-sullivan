import React from "react";

const RoundCounter = ({ value, id, handleSlide }) => {
  return (
    <div className="round-counter">
      <input
        id={id}
        value={value}
        onChange={(event) => handleSlide(event.target)}
        min={0}
        max={10}
      ></input>
    </div>
  );
};

export default RoundCounter;
