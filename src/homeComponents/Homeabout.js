import React from "react";
import Glasses from "../assets/glasses.jpg";
import { Link } from "react-router-dom";

function Homeabout() {
  return (
    <div className="home-about">
      <div className="about">
        <div className="about-head">
          <h1>ABOUT ME</h1>
        </div>
        <p>
          I am here to help you to turn your idea into reality.Whether it is
          about the creation of a website or an application, you will definitely
          get the most original web design and you will stand out from the
          competition with your uniqueness.
        </p>
        <div className="buttons">
          <button className="button-two">
            <Link to="/about">Read More</Link>
          </button>
        </div>
      </div>
      <div className="glasses-image">
        <img src={Glasses} alt="glasses" />
      </div>
    </div>
  );
}

export default Homeabout;
