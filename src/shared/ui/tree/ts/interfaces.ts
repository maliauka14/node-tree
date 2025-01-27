import { ReactNode } from "react";

export interface ITreeNodeProps {
  node: INodeData;
  selected?: number;
  hadleCheckIdExpand: (id: number) => boolean;
  handleSelectNode: (id: number) => void;
  nodeTemplate?: (node: INodeData, isActive: boolean) => ReactNode;
}

export interface INodeData {
  id: number;
  name: string;
  children?: INodeData[];
}

export interface ITreeProps {
  data: INodeData[];
  className?: string;
  nodeTemplate?: (node: INodeData, isActive: boolean) => ReactNode;
}
