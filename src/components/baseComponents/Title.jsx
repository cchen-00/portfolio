const Title = ({ text, size = "md" }) => {
  let className = "title";

  if (size === "sm") {
    className += " title--small";
  } else if (size === "lg") {
    className += " title--large";
  }

  return <div className={className}>{text}</div>;
};

export default Title;
