import React from "react";
import AboutSkills from "./AboutSkills";

function AboutDescription() {
  return (
    <div className="about-description">
      <div className="description">
        <h4>Hi, I am Stefan Pantelic</h4>
        <h2>A freelance Web developer</h2>
        <p>
          I'm building the Front-end of Websites. I like to code things from
          scratch, and enjoy bringing ideas to life in the browser.
          <br />
          I'm hard-working, reliable, courious, comunicative and team-oriented
          person.
          <br />
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
        <a
          href="https://drive.google.com/file/d/176GBwtXrg1ZJauhZUAU3dyF9Rdw5P7IR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="download"
        >
          Download CV
        </a>
      </div>
      <div className="about-skills-component">
        <AboutSkills />
      </div>
    </div>
  );
}

export default AboutDescription;
