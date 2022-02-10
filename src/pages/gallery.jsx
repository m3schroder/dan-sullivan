import React, { useEffect } from "react";

import images from "../assets/images/gallery";
import "../assets/scss/gallery.scss";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
