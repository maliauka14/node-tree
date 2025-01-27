import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
  disabled?: boolean;
}
