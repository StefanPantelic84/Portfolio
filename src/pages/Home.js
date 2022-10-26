import React from "react";
import Hero from "../homeComponents/Hero.js";
import Homeabout from "../homeComponents/Homeabout";
import HomeContact from "../homeComponents/HomeContact.js";
import HomeProjects from "../homeComponents/HomeProjects.js";
import Services from "../homeComponents/Services";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Hero />
      <Homeabout />
      <Services />
      <HomeProjects />
      <HomeContact />
    </div>
  );
}

export default Home;
