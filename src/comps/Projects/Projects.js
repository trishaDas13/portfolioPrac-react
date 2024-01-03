import React, { useState } from "react";
import "./Projects.css";
import { nanoid } from "nanoid";
import Title from "../title/Title";
import projectData from "./ProjectUtils";

const Projects = () => {
  const [tabSelect, setTabSelect] = useState("All")
  const [dataArr, setDataArr] = useState(projectData)
  const filterList = ["All", "Websites", "Applications", "Games"];

  const handleFilter = (item) => {
    setTabSelect(item)
    let newDataArr = projectData.filter((ele) => {
      return ele.type === item || item === 'All'
    })
    setDataArr(newDataArr);
  };
  return (
    <>
      <Title title="Projects" />
      <div className="Projects">
        <ul className="filter-list">
          {filterList.map((item) => {
            return (
              <li
                key={nanoid()}
                className= {(tabSelect===item) ? "filter-item selected" : "filter-item"} 
                onClick={() => handleFilter(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <ul className="project-list">
          {dataArr.map((project) => {
            return (
              <li key={nanoid()} className="project-item">
                <a
                  href={project.previwLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="project-img">
                    <img src={project.img} alt="" />
                  </figure>
                </a>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-development">{project.tech}</p>
                <div className="project-buttons">
                  <a
                    href={project.previwLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      pointerEvents: (project.previwLink === "https://") ? "none" : "auto",
                      opacity: (project.previwLink === "https://") ? "0.6" : "1"
                    }}
                  >
                    <ion-icon name="eye-outline"></ion-icon>
                    Preview
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      pointerEvents: (project.previwLink === "https://") ? "none" : "auto",
                      opacity: (project.previwLink === "https://") ? "0.6" : "1"
                    }}
                  >
                    <ion-icon name="logo-github"></ion-icon>
                    Github
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Projects;
