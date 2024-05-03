const ProgressBar = ({ value, max = 100, width = "100%", height = "10px" }) => {
  return (
    <progress
      value={value}
      max={max}
      className="progress"
      style={{ width: width, height: height }}
    />
  );
};

export default ProgressBar;
