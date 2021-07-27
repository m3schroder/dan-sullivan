import React, { Component } from "react";

import "../assets/css/homepage.css";
import { splash } from "../assets/images/index";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="text-container">
          <h1>Why Chose Our Carpet Cleaning Service?</h1>
          <p>
            We service areas in and around Franklin, Brentwood, and Spring hill
            and are committed to your flooring needs. Whether your a health
            coach, house cleaner, or dog trainer, our carpet cleaning experts
            are sure to impress!
          </p>
          <p className="line-break">
            We go above and beyond your normal carpet cleaner! Our carpet
            technicians utilize state of the art cleaning supplies and
            specialize in making old carpet look new again. Our professional
            carpet stain detergent spray is used as a protective barrier (on
            request) to keep your carpet looking clean!
          </p>
        </div>
        <div>
          <img
            className="home-splash"
            src={splash}
            alt="Captivating shot of the best carpet cleaner in middle TN"
          ></img>{" "}
        </div>
        <h1> </h1>
        <div className="text-container">
          <h1>Carpet Cleaning in Williamson County</h1>
          <p>
            Our carpet cleaning specialist enjoys giving you the cleanest floors
            and scheduling has never been easier. Once we set up your
            appointment, you can relax and get ready to enjoy your steam cleaned
            space. We offer a wide variety of services for tiles, carpet,
            upholstery and more. Rely on our professional and hardworking crew
            who has over 20 years experience in the cleaning industry.
            <p className="line-break"></p> Our workers are on time, courteous,
            respectful and, best of all, thorough. Your privacy and cleanliness
            is our top priority! We're educated, well spoken, and ready to work.
            ​Hire the best carpet cleaning service in the Williamson County area
            today!
            <p className="line-break"></p> Call us at
            <a href="tel:6159056292">
              <strong style={{ fontSize: ".9em" }}> 615-905-6292 </strong>
            </a>
            or click
            <strong> here</strong> to schedule!
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
