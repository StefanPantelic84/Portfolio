import React from "react";
import { MdOutlineDesktopMac } from "react-icons/md";
import { FiCode } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";

function Services() {
  return (
    <div className="services">
      <div className="title">
        <h1>SERVICES</h1>
      </div>

      <div className="will-do-part">
        <section className="design">
          <div className="icon">
            <MdOutlineDesktopMac />
          </div>
          <h3>web design</h3>
          <p>
            "I value simple content structure, clean design patterns, and
            thoughtful interactions.."
          </p>
        </section>

        <section className="web-dev">
          <div className="icon">
            <FiCode />
          </div>
          <h3>web dev</h3>
          <p>
            "Creating websites that are eye catching, easy to navigate, but very efficient."
          </p>
        </section>

        <section className="app-dev">
          <div className="icon">
            <GiSmartphone />
          </div>
          <h3>app Dev</h3>
          <p>
            "Creating your own mobile app is the perfect way to draw more
            engagement from your website visitors on mobile devices."
          </p>
        </section>
      </div>
    </div>
  );
}

export default Services;
