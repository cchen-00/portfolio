import { useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/baseComponents/Title.jsx";
import Button from "../components/baseComponents/Button.jsx";
import PROJECTS from "../constants/projects.js";

const ProjectPage = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(PROJECTS[id] || null);

  return (
    <div className="project">
      <div className="project__container">
        {currentProject ? (
          <>
            <div className="project__tags">
              {currentProject.tags.map((tag) => {
                return (
                  <span key={tag} className="project__tag">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div>
              <Title text={currentProject.name} size="sm" />
            </div>

            <div className="project__links">
              {currentProject.demoLink && (
                <a
                  href={currentProject.demoLink}
                  target="_blank"
                  className="project__link"
                >
                  <b>Demo:</b> {currentProject.demoLink}
                </a>
              )}
              {currentProject.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  className="project__link"
                >
                  <b>Official website: </b>
                  {currentProject.link}
                </a>
              )}
              {currentProject.github && (
                <p>
                  <a
                    href={currentProject.github}
                    target="_blank"
                    className="project__link"
                  >
                    <b>GitHub:</b> {currentProject.github}
                  </a>
                </p>
              )}

              {currentProject.behance && (
                <p>
                  <a
                    href={currentProject.behance}
                    target="_blank"
                    className="project__link"
                  >
                    <b>Behance:</b> {currentProject.behance}
                  </a>
                </p>
              )}
            </div>
            <p className="project__description">{currentProject.description}</p>

            {currentProject.content.map((item, index) => {
              if (item.type === "text") {
                return <p key={index}>{item.value}</p>;
              } else if (item.type === "img") {
                return <img key={index} src={item.value} alt="Project" />;
              }
            })}
          </>
        ) : (
          <div>Project not found</div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
