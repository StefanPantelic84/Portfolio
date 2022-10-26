import React from "react";
import HomeProjects from "../homeComponents/HomeProjects";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  },[]);
  return (
    <div>
      <div className="empty"></div>
      <HomeProjects />
    </div>
  );
}

export default Projects;
