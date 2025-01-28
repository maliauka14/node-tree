import { FC, FormEvent, useRef, useState, MouseEvent } from "react";

import { MdAddCircleOutline } from "react-icons/md";

import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { Modal } from "../../../../shared/ui/modal";
import { IconButton } from "../../../../shared/ui/icon-button";
import { ICreateModalProps } from "../../ts";
import "../modals.css";

export const CreateModal: FC<ICreateModalProps> = ({
  id,
  createNode,
  isLoading,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpenModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const formDataObj = Object.fromEntries(formData.entries());
    const newNodeName = formDataObj.nodeName as string;
    createNode(id, newNodeName).then((success) => {
      if (success) setOpen(false);
    });
  };

  return (
    <>
      <IconButton className="modals__open-button" onClick={handleOpenModal}>
        <MdAddCircleOutline />
      </IconButton>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Create new node"
        disabled={isLoading}
      >
        <form ref={formRef} className="form" onSubmit={handleSubmit}>
          <Input labelText="Node name" name="nodeName" required />
          <Button
            loading={isLoading}
            loadingText="Creating"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </form>
      </Modal>
    </>
  );
};
