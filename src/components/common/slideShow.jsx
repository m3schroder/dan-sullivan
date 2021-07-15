import React from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

const SlideShow = ({ images }) => {
  return (
    <Slide className="slide-container" easing="ease">
      <div className="each-slide">
        {images.map((image) => (
          <img
            className="rounded"
            src="../../assets/images/aang-vertical.jpg"
            alt="text"
          />
        ))}
      </div>
    </Slide>
  );
};

export default SlideShow;
