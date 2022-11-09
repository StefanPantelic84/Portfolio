import React from "react";
import AboutDescription from "../components/aboutComponents/AboutDescription";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <AboutDescription />
    </div>
  );
}

export default About;
