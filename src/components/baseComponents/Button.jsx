const Button = ({ children, type, size = "md", className, ...props }) => {
  let buttonStyle = "button";
  if (size === "sm") {
    buttonStyle += " button--small";
  } else if (size === "lg") {
    buttonStyle += " button--large";
  }

  return (
    <button type={type} className={`${buttonStyle} ${className}`} {...props}>
      <div>{children}</div>
    </button>
  );
};

export default Button;
