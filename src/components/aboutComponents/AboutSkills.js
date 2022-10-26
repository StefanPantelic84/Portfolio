import React from "react";

function AboutSkills() {
  return (
    <div className="skills-container">
      <section className="skills-section">
        <div className="education">
          <h1>EDUCATION:</h1>
          <nav className="school">
            <h3>School:</h3>
            <p>High School</p>
          </nav>
          <nav className="school">
            <h3>College:</h3>
            <p>Computer Science</p>
          </nav>
        </div>
        <div className="education">
          <h1>SKILLS:</h1>
          <nav className="school">
            <h3>FrontEnd:</h3>
            <div className="school-pasus">
              <p>REACT</p>
              <p>JS</p>
              <p>CSS</p>
              <p>HTML</p>
            </div>
          </nav>
          <nav className="school">
            <h3>Design:</h3>
            <div className="school-pasus">
              <p>Photoshoop</p>
              <p>After Effects</p>
            </div>
          </nav>
          <nav className="school">
            <h3>Language:</h3>
            <div className="school-pasus">
              <p>English B1</p>
              <p>Italian B2</p>
            </div>
          </nav>
        </div>
        <div className="education">
          <h1>EXPIRIENCE:</h1>

          <nav className="school">
            <h3>2007-2009:</h3>
            <p>Translator</p>
          </nav>
          <nav className="school">
            <h3>2009-2018:</h3>
            <p>Administration</p>
          </nav>
          <nav className="school">
            <h3>2018-2022</h3>
            <div className="school-pasus">
              <p>Entrepreneur</p>
              <p>Freelance</p>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default AboutSkills;
