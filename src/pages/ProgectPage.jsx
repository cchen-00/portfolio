import { useParams } from "react-router-dom";

const ProgectPage = () => {
  const { id } = useParams();

  return <div className="project">ProgectPage: {id}</div>;
};

export default ProgectPage;
