import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import { logo } from "../assets/images/index";
import "../assets/scss/homepage.scss";
import { splash, carpetCleaning } from "../assets/images/index";
import ClickToHire from "../components/ClickToHire";

const Home = ({ toggleForm }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div id="home">
        {/* <div id="home"> */}
        <div className="text-container" id="one">
          <h1>Why Choose Us?</h1>
          <article>
            Miraculous Carpet Care is here to meet your cleaning needs! From
            general carpet cleaning to rugs, tile, and even upholstery, our goal
            is to make a noticeable difference that you can be proud of. As a
            company we value our quality and your satisfaction above all else.
            Whether it’s persistent pet stains, grimy tile, or even ruined
            curtains we’ve got you covered. In Williamson or Davidson county
            Tennessee? Give us a call at
            <a href="tel:6159056292">
              <strong> 615-905-6292 </strong>
            </a>
            or click
            <strong onClick={() => toggleForm()}> here</strong> to schedule!
          </article>
          <div className="button-container">
            <ClickToHire toggleForm={toggleForm} />
          </div>
        </div>
        <div id="two" class="img-div">
          <img
            src={splash}
            alt="Captivating shot of the best carpet cleaner in middle TN"
          ></img>
        </div>

        <div className="text-container" id="three">
          <h1>How we do it</h1>
          <article>
            Our carpet cleaning specialists strive to give you the cleanest
            floors possible. Once we set up your appointment, you can relax and
            get ready to enjoy your steam cleaned space, stain free rug, or
            shiny new tile. Scheduling has never been easier! We offer a{" "}
            <Link to="/services">wide variety of services</Link> for tiles,
            carpet, upholstery and more. Rely on our professional and
            hardworking crew who has over 20 years experience in the cleaning
            industry.
            <div className="line-break" /> Our workers are on time, courteous,
            respectful, and thorough. Quality work is our specialty and your
            privacy and cleanliness are our top priority! ​Hire the best carpet
            cleaners in the Williamson County area today!
          </article>
        </div>
        <div id="four" class="img-div">
          <img src={carpetCleaning} alt="Stock cleaning"></img>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Home;
