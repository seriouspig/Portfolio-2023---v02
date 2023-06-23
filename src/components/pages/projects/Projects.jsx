import React, { useState } from "react";
import { projects } from "../../../data";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  // const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("All")

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  console.log(isTouchDevice());

  // const handleClick = (event) => {
  //   if (!isActive && isTouchDevice() === true) {
  //     event.preventDefault();
  //     setIsActive((current) => !current);
  //   }
  //   console.log("Is active is: " + isActive);
  // };

  return (
    <section className="section projects">
      {/* <!-- section title --> */}
      <div className="section-title">
        <h2>
          My <span className="hero-piotr">work</span>
        </h2>
        <div className="underline"></div>
        <p className="projects-text"></p>
        <div className="categories section-center">
          <div onClick={() => setCategory("All")}>
            <h2>All</h2>
            {category === "All" && <div className="underline-2"></div>}
          </div>
          <div onClick={() => setCategory("Games")}>
            <h2>Games</h2>
            {category === "Games" && <div className="underline-2"></div>}
          </div>
          <div onClick={() => setCategory("Software")}>
            <h2>Software</h2>
            {category === "Software" && <div className="underline-2"></div>}
          </div>
          <div onClick={() => setCategory("Arch")}>
            <h2>Arch</h2>
            {category === "Arch" && <div className="underline-2"></div>}
          </div>
        </div>
      </div>

      <div className="projects-center section-center">
        {projects.map((project) => {
          return (
            <Project
              image={project.image}
              title={project.title}
              info={project.info}
              url={project.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
