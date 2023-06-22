import React, { useState } from "react";
import { projects } from "../../../data";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [isActive, setIsActive] = useState(false);

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  console.log(isTouchDevice());

  const handleClick = (event) => {
    if (!isActive && isTouchDevice() === true) {
      event.preventDefault();
      setIsActive((current) => !current);
    }
    console.log("Is active is: " + isActive);
  };

  return (
    <section className="section projects">
      {/* <!-- section title --> */}
      <div className="section-title">
        <h2>
          My <span className="hero-piotr">work</span>
        </h2>
        <div className="underline"></div>
        <p className="projects-text"></p>
      </div>
      <div className="projects-center section-center">
        {projects.map((project) => {
          return (
            <Project
              image={project.image}
              title={project.title}
              info={project.info}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
