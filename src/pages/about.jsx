import React, { useEffect } from "react";

// import { splash } from "../assets/images";
import "../assets/scss/about.scss";
import ClickToHire from "../components/ClickToHire";
const About = ({ toggleForm }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div id="about">
        <article className="starting">
          <h1>Getting Started</h1>
          {"\t"}Throughout his teens Dan worked many blue-collar jobs. These
          jobs were a stepping stone to what Dan knew would one day lead to
          owning his own business. He didn't know what that business would be
          though...
          <div className="line-break" />
          {"\t"}After over a decade in the blue-collar world and several,
          several jobs in the industry, and many days away from home Dan had the
          experience and motivation he needed. Dan’s wonderful wife encouraged
          him to fulfill his dream of owning his own carpet cleaning business.
          Then, after 6 months of hard work and deliberation, Dan had fullfilled
          his dream of being a business owner! Fastfoward three years and Dan
          has been blessed with another carpet cleaning technician on his team!
        </article>
        <div className="quote">
          <blockquote>
            <strong>Dan</strong> - “
            <i>
              I am great at it and I enjoy the satisfaction of showing up at
              someone’s home and making a fantastic difference for them. I enjoy
              rolling out the hoses while prepping the job and then packing the
              truck up and moving on to a new client, sometimes five times in a
              day! With my wife’s encouragement I sought to purchase the
              equipment and set up an LLC
            </i>
            ”.
          </blockquote>
        </div>
        <div className="button-container">
          <ClickToHire toggleForm={toggleForm} />
        </div>
        <article className="family">
          <h1>Family Time</h1>
          {"\t"}Dan Sullivan is MCC’s founder and main contact for the company.
          He's a family man who grew up in a family of 12 with 10 of his best
          friends. He thanks God for giving him the family that he has, and
          especially for his loving, supportive parents.
          <div className="line-break" />
          {"\t"}Dan lives with his wife, the most impressive person he knows,
          and their 4 children ages 14, 7, 2, and 1. They live in Franklin,
          however, he will fulfill jobs in Franklin, Brentwood, and Spring Hill.
          Thankfully, because of this business, Dan is able to be home every
          night with his family, which is something he has never been able to
          do.
          <div className="line-break" />
          {"\t"}Dan’s favorite part about his business is that it requires him
          to put into practice all of the different skills and virtues that will
          make him the best man he can be. These skills and virtues include
          integrity, honesty, meticulous attention to detail, honest labor for
          fair pay, effort, long suffering, and many more. He quotes “I don’t
          claim to be a master of the skills and virtues but, this job gives me
          a chance to practice them and I don’t know that anyone could ask for
          anything more!”
        </article>
      </div>
    </>
  );
};

export default About;
