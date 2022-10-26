import React from "react";
import ProjectImg from "../assets/cavinimg.jpg";

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  mylink = "https://github.com/StefanPantelic84", 
}) {
  return (
    <div className="my-projects">
      <img src={img} alt="project img" />   
      <div className="project-item-info">
        <a href={mylink} target="_blank" rel="noopener noreferrer">
          <h3 className="project-item-title">{title}</h3>
        </a>
        <p className="project-item-desc">{desc}</p>
      </div>
    </div>
  );
}
