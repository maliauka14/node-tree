import { FC } from "react";

import { Spinner } from "../spinner";
import { IPreloaderProps } from "./ts";
import "./preloader.css";

const Preloader: FC<IPreloaderProps> = ({ open }) => {
  if (!open) return <></>;
  return (
    <div className="preloader">
      <Spinner size={56} />
    </div>
  );
};

export default Preloader;
