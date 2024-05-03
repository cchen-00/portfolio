import ProgressBar from "./ProgressBar";

const SkillProgress = ({ value, title }) => {
  return (
    <div className="skills__item">
      {title}
      <ProgressBar value={value} />
    </div>
  );
};

export default SkillProgress;
