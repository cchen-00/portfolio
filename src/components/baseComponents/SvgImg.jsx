const SvgImg = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <img
        src={src}
        style={{ width: width, height: height }}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default SvgImg;
