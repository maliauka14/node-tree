import { FC, FormEvent, useRef, useState, MouseEvent } from "react";

import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { Modal } from "../../../../shared/ui/modal";
import { IRenameModalProps } from "../../ts";
import { IconButton } from "../../../../shared/ui/icon-button";
import "../modals.css";

export const RenameModal: FC<IRenameModalProps> = ({
  nodeName,
  id,
  renameNode,
  isLoading,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const formDataObj = Object.fromEntries(formData.entries());
    const newNodeName = formDataObj.nodeName as string;
    renameNode(id, nodeName, newNodeName).then((success) => {
      if (success) setOpen(false);
    });
  };

  return (
    <>
      <IconButton className="modals__open-button" onClick={handleOpenModal}>
        <MdOutlineDriveFileRenameOutline />
      </IconButton>

      <Modal
        open={open}
        setOpen={setOpen}
        title="Rename node"
        disabled={isLoading}
      >
        <form ref={formRef} className="form" onSubmit={handleSubmit}>
          <Input
            labelText="New node name"
            defaultValue={nodeName}
            name="nodeName"
            required
          />
          <Button
            loading={isLoading}
            loadingText="Renaming"
            onClick={handleSubmit}
          >
            Rename
          </Button>
        </form>
      </Modal>
    </>
  );
};
