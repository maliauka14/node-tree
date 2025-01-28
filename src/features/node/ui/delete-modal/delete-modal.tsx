import { FC, useState, MouseEvent } from "react";

import { MdDeleteOutline } from "react-icons/md";
import { useSnackbar } from "notistack";

import { Button } from "../../../../shared/ui/button";
import { Modal } from "../../../../shared/ui/modal";
import { IDeleteModalProps } from "../../ts";
import { IconButton } from "../../../../shared/ui/icon-button";
import "../modals.css";

export const DeleteModal: FC<IDeleteModalProps> = ({
  nodeName,
  id,
  deleteNode,
  isLoading,
  isHaveChild,
}) => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isHaveChild) {
      enqueueSnackbar("You have to delete all children nodes first", {
        variant: "info",
      });
    } else setOpen(true);
  };

  const handleDeleteNode = () => {
    deleteNode(id).then((success) => {
      if (success) setOpen(false);
    });
  };

  return (
    <>
      <IconButton
        className="modals__open-button modals__delete-button"
        onClick={handleOpenModal}
      >
        <MdDeleteOutline />
      </IconButton>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Delete node"
        disabled={isLoading}
      >
        <span className="delete-node__alert">
          Do you want to delete {nodeName}?
        </span>
        <Button
          className="delete-node__button"
          onClick={handleDeleteNode}
          loading={isLoading}
          loadingText="Deleting"
          type="submit"
        >
          Delete
        </Button>
      </Modal>
    </>
  );
};
