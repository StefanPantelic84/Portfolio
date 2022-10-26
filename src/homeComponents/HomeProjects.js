import React from "react";
import projectss from "../assets/data/projectss";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function HomeProjects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="home-projects">
      <section className="projects-title">
        <h1>PROJECTS</h1>
      </section>

      <motion.div
        ref={carousel}
        className="motion-container"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="projects-all-items"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {projectss.map((project) => {
            return (
              <motion.div key={project.id} className="single-project">
                <ProjectItem
                  title={project.name}
                  img={project.img}
                  desc={project.desc}
                  mylink={project.mylink}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomeProjects;
