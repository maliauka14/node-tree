import { FC } from "react";

import { IInputProps } from "./ts";
import "./input.css";

const Input: FC<IInputProps> = (props) => {
  const { labelText, className, ...rest } = props;
  return (
    <label>
      {labelText && <p className="input__text">{labelText}</p>}
      <input {...rest} className={`input ${className || ""}`} />
    </label>
  );
};

export default Input;
