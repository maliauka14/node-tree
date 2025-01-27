import { FC, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";

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
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleDeleteNode = () => {
    deleteNode(id).then((success) => {
      if (success) setOpen(false);
    });
  };

  return (
    <>
      <IconButton className="modals__open-button" onClick={handleOpenModal}>
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
