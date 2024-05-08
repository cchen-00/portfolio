import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SvgImg from "./baseComponents/SvgImg";
import projectsText from "../assets/images/projects_title.svg";
import PROJECTS from "../constants/projects";
import { PROJECT_TAGS } from "../constants/constants";

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (tag === "all projects") {
      setSelectedTags([]);
    } else {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };

  const PROJECT_TYPES = ["coding", "design"];

  const renderProjectCards = (type) => {
    return PROJECTS.filter(
      (project) =>
        project.type.toLowerCase() === type.toLowerCase() &&
        (selectedTags.length === 0 ||
          project.tags.some((tag) => selectedTags.includes(tag)))
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
                selectedTags.includes(tag) ? "projects__tagBtn--active" : ""
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
    </div>
  );
};

export default Projects;
