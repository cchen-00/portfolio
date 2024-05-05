import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div key={`project${project.id}`} className="card">
        <Link to={`/project/${project.id}`}>
          <div className="card__wrapper">
            <img
              src={project.poster}
              alt="Project Poster"
              className="card__img"
            />
          </div>
        </Link>
        {/* <p className="card__title">{project.name}</p> */}
        {/* <p>{project.description}</p> */}
        {/* <div>
          {project.tags.map((tag) => {
            return (
              <span key={tag} className="tag">
                {tag}
                {", "}
              </span>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
