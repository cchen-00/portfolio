import { useState } from "react";
import { useParams } from "react-router-dom";
import PROJECTS from "../constants/projects.js";

const ProgectPage = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(PROJECTS[id] || null);

  return (
    <div className="project">
      <div className="project__container">
        {currentProject ? (
          <>
            <h2>{currentProject.name}</h2>
            <p>{currentProject.description}</p>
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

export default ProgectPage;
