import { useParams } from "react-router-dom";

const ProgectPage = () => {
  const { id } = useParams();

  return <div>ProgectPage: {id}</div>;
};

export default ProgectPage;
