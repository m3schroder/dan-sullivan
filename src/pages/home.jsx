import React, { Component } from "react";

import { logo } from "../assets/images/index";
import "../assets/css/homepage.css";
import { splash, carpetCleaning } from "../assets/images/index";

class Home extends Component {
  render() {
    return (
      <>
        <div id="home-banner">
          <img className="show-mobile" src={logo} />
          Miraculous Carpet Care
        </div>
        <div id="home" className="page-container">
          <div className="text-container" id="one">
            <h1>Why Choose Our Carpet Cleaning Service?</h1>
            <div>
              We service areas in and around Franklin, Brentwood, and Spring
              hill and are committed to your flooring needs. Whether your a
              health coach, house cleaner, or dog trainer, our carpet cleaning
              experts are sure to impress!
              <div className="line-break" />
              We go above and beyond your normal carpet cleaner! Our carpet
              technicians utilize state of the art cleaning supplies and
              specialize in making old carpet look new again. Our professional
              carpet stain detergent spray is used as a protective barrier (on
              request) to keep your carpet looking clean!
            </div>
          </div>
          <div id="two">
            <img
              className="page-image"
              src={splash}
              alt="Captivating shot of the best carpet cleaner in middle TN"
            ></img>
          </div>

          <div className="text-container" id="three">
            <h1>Carpet Cleaning in Williamson County</h1>
            <div>
              Our carpet cleaning specialist enjoys giving you the cleanest
              floors and scheduling has never been easier. Once we set up your
              appointment, you can relax and get ready to enjoy your steam
              cleaned space. We offer a wide variety of services for tiles,
              carpet, upholstery and more. Rely on our professional and
              hardworking crew who has over 20 years experience in the cleaning
              industry.
              <div className="line-break" /> Our workers are on time, courteous,
              respectful and, best of all, thorough. Your privacy and
              cleanliness is our top priority! We're educated, well spoken, and
              ready to work. ​Hire the best carpet cleaning service in the
              Williamson County area today!
              <div className="line-break" /> Call us at
              <a href="tel:6159056292">
                <strong style={{ fontSize: ".9em" }}> 615-905-6292 </strong>
              </a>
              or click
              <strong> here</strong> to schedule!
            </div>
          </div>
          <div id="four">
            <img
              className="page-image"
              src={carpetCleaning}
              alt="Stock cleaning"
            ></img>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
