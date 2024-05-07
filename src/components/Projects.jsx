import ProjectCard from "./ProjectCard";
import SvgImg from "./baseComponents/SvgImg";
import projectsText from "../assets/images/projects_title.svg";
import PROJECTS from "../constants/projects";
import { PROJECT_TAGS } from "../constants/constants";

const Projects = () => {
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
            <button key={tag} className="tag">
              {tag}
            </button>
          );
        })}
      </div>
      <div className="projects__subTitle">
        Coding
      </div>
      <div className="projects__container">
        {PROJECTS.map((project) => (
          <ProjectCard key={`project${project.id}`} project={project} />
        ))}
      </div>
      <div className="projects__subTitle">
        Design
      </div>
      <div className="projects__container">
        {PROJECTS.map((project) => (
          <ProjectCard key={`project${project.id}`} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
