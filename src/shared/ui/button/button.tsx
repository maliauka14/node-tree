import { FC } from "react";

import { IButtonProps } from "./ts";
import { generateButtonContent } from "./utils";
import "./button.css";

const Button: FC<IButtonProps> = (props) => {
  const { loading, loadingText, ...rest } = props;

  return (
    <button
      {...rest}
      className={`button ${props.className || ""}`}
      {...((props.disabled || loading) && { disabled: true })}
    >
      {generateButtonContent(loading, props.children, loadingText)}
    </button>
  );
};

export default Button;
