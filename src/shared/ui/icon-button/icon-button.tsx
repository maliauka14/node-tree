import { ButtonHTMLAttributes, FC } from "react";

import { Button } from "../button";
import "./icon-button.css";

const IconButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className, ...rest } = props;

  return <Button {...rest} className={`icon-button ${className || ""}`} />;
};

export default IconButton;
