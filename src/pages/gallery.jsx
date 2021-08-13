import React from "react";

import images from "../assets/images/gallery";
import "../assets/css/gallery.css";

const Gallery = () => {
  return (
    <div id="gallery-container">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
