import React from "react";

// import { logo } from "../assets/images/index";
import "../assets/scss/homepage.scss";
import { splash, carpetCleaning } from "../assets/images/index";
import ClickToHire from "../components/ClickToHire";

const Home = ({ toggleForm }) => {
  return (
    <>
      <div id="home">
        {/* <div id="home"> */}
        <div className="text-container" id="one">
          <h1>Why Choose Us?</h1>
          <article>
            Miraculous Carpet Care is here to meet your cleaning needs. From
            general carpet cleaning to rugs, tile, and even upholstery, our goal
            is to make a noticeable difference that you can be proud of. As a
            company we value our quality and your satisfaction above all else.
            Whether it’s persistent pet stains, grimy tile, or even ruined
            curtains we’ve got you covered. In Williamson or Davidson county
            Tennessee? Click the link below to inquire or give us a call at
            <div className="callus">
              Call us at
              <a href="tel:6159056292">
                <strong> 615-905-6292 </strong>
              </a>
              or click
              <strong onClick={() => toggleForm()}> here</strong> to schedule!
            </div>
            <div className="line-break" />
            Our carpet technicians utilize state of the art cleaning supplies
            and specialize in making old carpet look new again.
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
            Our carpet cleaning specialist enjoys giving you the cleanest floors
            and scheduling has never been easier. Once we set up your
            appointment, you can relax and get ready to enjoy your steam cleaned
            space. We offer a wide variety of services for tiles, carpet,
            upholstery and more. Rely on our professional and hardworking crew
            who has over 20 years experience in the cleaning industry.
            <div className="line-break" /> Our workers are on time, courteous,
            respectful and, best of all, thorough. Your privacy and cleanliness
            is our top priority! We're educated, well spoken, and ready to work.
            ​Hire the best carpet cleaning service in the Williamson County area
            today!
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
