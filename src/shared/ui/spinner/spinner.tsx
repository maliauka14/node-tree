import { FC } from "react";

import { ISpinnerProps } from "./ts";
import "./spinner.css";

const Spinner: FC<ISpinnerProps> = ({ size }) => {
  const style = size ? { height: `${size}px`, width: `${size}px` } : {};

  return <div style={style} className="spinner"></div>;
};

export default Spinner;
