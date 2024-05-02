const SvgBase = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  position = "initial",
  className,
  ...props
}) => {
  return (
    <div className={className} style={{ position: position }}>
      <img
        src={src}
        style={{ width: width, height: height }}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default SvgBase;
