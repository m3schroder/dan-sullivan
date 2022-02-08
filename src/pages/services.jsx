import React from "react";

import "../assets/scss/services.scss";

const listOfServices = [
  "Carpet Cleaning",
  "Area Rug Cleaning",
  "Upholstery Cleaning",
  "Tile Cleaning",
  "Stain Removal",
  "Commercial Cleaning",
];
const descOfServices = [
  "Carpet Desc",
  "Area Rug Cleaning",
  "Upholstery Cleaning",
  "Tile Cleaning",
  "Stain Removal desc",
  "Okay",
];
const Services = () => {
  return (
    <div id="services">
      {listOfServices.map((el, i) => (
        <section key={i} className="text-container" id="one">
          <h2>{el}</h2>
          <div>{descOfServices[i]}</div>
        </section>
      ))}
    </div>
  );
};

export default Services;
