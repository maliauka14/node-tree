export interface ICreateModalProps {
  id: number;
  createNode: (parentId: number, nodeName: string) => Promise<unknown>;
  isLoading: boolean;
}

export interface IDeleteModalProps {
  nodeName: string;
  id: number;
  deleteNode: (nodeId: number) => Promise<unknown>;
  isLoading: boolean;
}
export interface IRenameModalProps {
  nodeName: string;
  id: number;
  renameNode: (
    nodeId: number,
    nodeName: string,
    newNodeName: string
  ) => Promise<unknown>;
  isLoading: boolean;
}
