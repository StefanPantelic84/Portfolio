import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "./styles/NavMenu.css";
import "./styles/Hero.css";
import "./styles/Homeabout.css";
import "./styles/Services.css";
import "./styles/HomeProjects.css";
import "./styles/ProjectItem.css";
import "./styles/HomeContact.css";
import "./styles/Footer.css";
import "./styles/about/aboutDescription.css";
import "./styles/about/aboutSkills.css";
import "./styles/Contact.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
