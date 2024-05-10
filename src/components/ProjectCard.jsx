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
            <div className="card__textWrapper">
              <div className="card__title">{project.name}</div>
              <div className="card__subTitle">{project.subTitle}</div>
            </div>
          </div>
        </Link>
        <div className="card__mobileText">
          <h4 >{project.name}</h4>
          <p>{project.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
