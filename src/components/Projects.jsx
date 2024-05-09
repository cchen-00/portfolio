import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SvgImg from "./baseComponents/SvgImg";
import projectsText from "../assets/images/projects_title.svg";
import PROJECTS from "../constants/projects";
import SvgIcon from "./baseComponents/SvgIcon";
import ArrowIcon from "../assets/icons/arrow_icon.svg?react";
import { PROJECT_TAGS } from "../constants/constants";
import { LINKS } from "../constants/constants";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("all projects");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const PROJECT_TYPES = ["coding", "design"];

  const renderProjectCards = (type) => {
    return PROJECTS.filter(
      (project) =>
        project.type.toLowerCase() === type.toLowerCase() &&
        (selectedTag === "all projects" ||
          project.tags.some((tag) => selectedTag === tag))
    ).map((project) => (
      <ProjectCard key={`project${project.id}`} project={project} />
    ));
  };

  return (
    <div id="projects" className="projects">
      <SvgImg
        src={projectsText}
        width="260px"
        alt="Projects"
        className="projects__title"
      />

      <div className="projects__tags">
        {PROJECT_TAGS.map((tag) => {
          return (
            <button
              key={tag}
              className={`projects__tagBtn ${
                selectedTag === tag ? "projects__tagBtn--active" : ""
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {PROJECT_TYPES.map((type) => (
        <div key={type}>
          <div className="projects__subTitle">{type}</div>
          <div className="projects__container">{renderProjectCards(type)}</div>
        </div>
      ))}

      {selectedTag === "all projects" && (
        <div className="projects__linkRow">
          <a href={LINKS.behance} className="projects__link" target="_blank">
            More designs on Behance
            <SvgIcon size="20px" title="arrow icon">
              <ArrowIcon />
            </SvgIcon>
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
