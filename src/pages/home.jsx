import React, { Component } from "react";

import { aangh, aangv } from "../assets/images/index";

import "../assets/css/homepage.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img className="image img-fluid ah" src={aangh} alt="" />
        <img className="image img-fluid av" src={aangv} alt="" />
        <div className="text-container bt mx-auto">
          <h2>About Us</h2>
          <p>
            We're a small team that provides services for printing, designing,
            and web development and have pre-made 3D models made as well . See
            our product page for availablility and our services page if you're
            interested in novel 3D designs or web applications! For any
            questions / inquiries please email us at{"  "}
            <a
              style={{
                color: "inherit",
                fontFamily: "inherit",
              }}
              href="mailTo:contact@thefutureseed.com"
              alt="email"
            >
              contact@thefutureseed.com
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
