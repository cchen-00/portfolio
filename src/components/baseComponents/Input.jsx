import { useState } from "react";

const Input = ({
  value,
  label,
  validation,
  warning,
  type = "input",
  rows = 3,
  required,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);
  const [isShowRequired, setIsShowRequired] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (validation) {
      setIsValid(validation(event.target.value));
    }
    if (onChange) {
      onChange(event.target.value);
    }
    if (required) {
      if (event.target.value.trim() === "") {
        setIsShowRequired(true);
      } else {
        setIsShowRequired(false);
      }
    }
  };

  return (
    <div className="input">
      <label>{label}</label>
      <div className="input__text">
        {type === "textarea" ? (
          <textarea value={inputValue} onChange={handleChange} rows={rows} />
        ) : (
          <input type="text" value={inputValue} onChange={handleChange} />
        )}
      </div>
      <div className="input__warning">
        {isShowRequired ? "Required." : !isValid ? warning : null}
      </div>
    </div>
  );
};

export default Input;
