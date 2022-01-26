import React from "react";

import images from "../assets/images/gallery";
import "../assets/scss/gallery.scss";

const Gallery = () => {
  return (
    <div id="gallery" className="page-container">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
