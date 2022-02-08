import React from "react";

import { splash } from "../assets/images";
import "../assets/scss/about.scss";

const About = () => {
  return (
    <>
      <div id="about">
        {/* <div id="one">
          <img src={splash} alt="" />
          <h1>Miraculous Carpet Care</h1>
        </div> */}

        <div className="text-container" id="two">
          <h1>Ask dan if there is anything he would like to put here</h1>
          <div>
            Put a little personal touch on the website by having the owner of
            the company address clients himself
          </div>

          <h1 className="line-break">
            Welcome to Franklin's Favorite Carpet Cleaners!
          </h1>
          <div>
            Miraculous Carpet Care is Franklin's go to carpet cleaning service
            located South of Nashville, Tennessee! We take great pride in
            offering you the best carpet and floor cleaning solutions around! Be
            sure to check out our carpet cleaning services page to find out
            more!
            <div className="line-break" />
            We go above and beyond your normal carpet cleaner! Our carpet
            technicians utilize state of the art cleaning supplies and
            specialize in making old carpet look new again. Our professional
            carpet stain detergent spray is used as a protective barrier (on
            request) to keep your carpet looking clean!
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
