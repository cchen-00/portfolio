import PROJECTS from "../constants/projects";
import { PROJECT_TAGS } from "../constants/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects__title">Projects</div>
      <div className="projects__tags">
        {PROJECT_TAGS.map((tag) => {
          return (
            <button key={tag} className="tag">
              {tag}
            </button>
          );
        })}
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
