import React from "react";
import "./Portfolio.css";
import { projects } from "./Projects";
import { Modal } from "../components/index";
import { useState } from "react";

const Portfolio = () => {
  const [currentIdx, setCurrentIdx] = useState(null);

  const handleClick = (index) => {
    setCurrentIdx(index);
  };
  const clearCurrent = () => {
    setCurrentIdx(null);
  };
  const projectList = projects.map((project, index) => {
    return (
      <div
        key={index}
        onClick={() => handleClick(index)}
        className="portfolio-proj-frames"
      >
        <img src={project.image} alt={project.title} />
      </div>
    );
  });
  let currentProject = currentIdx >= 0 && projects[currentIdx];
  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <p>
        {" "}
        <a href="https://github.com/Haz7kh" target="blank">
          My github
        </a>
      </p>
      <div className="portfolio-grid">
        {currentProject && (
          <Modal
            onClick={clearCurrent}
            title={currentProject.title}
            description={currentProject.description}
            image={currentProject.image}
            url={currentProject.url}
          />
        )}
        {projectList}
      </div>
    </div>
  );
};

export default Portfolio;
