import React from "react";

// import { splash } from "../assets/images";
import "../assets/scss/about.scss";
import ClickToHire from "../components/ClickToHire";
const About = ({ toggleForm }) => {
  return (
    <>
      <div id="about">
        <div className="text-container">
          <article className="">
            Dan Sullivan is MCC’s founder and main contact for the company. He
            is a family oriented man having grown up in a family of 12 and his
            siblings being his best friends. He feels beyond blessed by God for
            giving him the family that he has, especially his parents for being
            so loving and supportive throughout his life.
            <div className="line-break" />
            Dan’s upbringing included a blue-collar working atmosphere in his
            teens. As he continued working these jobs, he knew he always wanted
            to own a business. He began carpet cleaning and worked as a tech for
            4 years and then moved to building homes. After that, he started a
            job at Halliburton Oil and Gas. During his time at Halliburton, Dan
            realized that his individual earning potential was greater with a
            large corporation than it was at any other small businesses as an
            employee.
            <div className="line-break" />
            After 10 years working away from home, Dan’s wonderful wife
            encouraged him to fulfill his dream of owning his own carpet
            cleaning business. “I am great at it and I enjoy the satisfaction of
            showing up at someone’s home and making a fantastic difference for
            them. I enjoy rolling out the hoses while prepping the job and then
            packing the truck up and moving on to a new client, sometimes five
            times in a day! With my wife’s encouragement I sought to purchase
            the equipment and set up an LLC”. Finally, after 6 months of
            thinking about it, Dan became a new business owner! Although Dan has
            owned this company for 3 years and has done all of the work himself
            during that time, he was able to hire another tech about 6 months
            ago and it has been a tremendous blessing.
            <div className="line-break" />
            Dan lives with his wife, the most impressive person he knows, and
            their 4 children ages 14, 7, 2, and 1. They live in Franklin,
            however, he will fulfill jobs in Franklin, Brentwood, and Spring
            Hill. Thankfully, because of this business, Dan is able to be home
            every night with his family, which is something he has never been
            able to do.
            <div className="line-break" />
            Dan’s favorite part about his business is that it requires him to
            put into practice all of the different skills and virtues that will
            make him the best man he can be. These skills and virtues include
            integrity, honesty, meticulous attention to detail, honest labor for
            fair pay, effort, long suffering, and many more. He quotes “I don’t
            claim to be a master of the skills and virtues but, this job gives
            me a chance to practice them and I don’t know that anyone could ask
            for anything more!”
          </article>
          <div className="button-container">
            <ClickToHire toggleForm={toggleForm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
