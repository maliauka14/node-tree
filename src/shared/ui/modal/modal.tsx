import { FC } from "react";
import { MdClose } from "react-icons/md";
import { IModalProps } from "./ts";
import { IconButton } from "../icon-button";
import "./modal.css";
import { generateClassName } from "../../utils";

const Modal: FC<IModalProps> = ({
  open,
  setOpen,
  children,
  title,
  disabled,
}) => {
  const handleCloseModal = () => {
    setOpen(false);
  };

  if (!open) return;
  return (
    <dialog
      onClick={(event) => event.stopPropagation()}
      open
      className={generateClassName("modal", { modal_disabled: disabled })}
    >
      <div className="modal__layout">
        <div className="modal__title">
          {title}
          <IconButton onClick={handleCloseModal} className="modal__close-icon">
            <MdClose />
          </IconButton>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
