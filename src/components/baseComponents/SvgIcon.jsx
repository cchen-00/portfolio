const SvgIcon = ({ children, size = "1em", color, title, ...props }) => {
  return (
    <svg style={{ fill: color, width: size, height: size }} {...props}>
      {/* {title && <title>{title}</title>} */}
      {children}
    </svg>
  );
};

export default SvgIcon;
