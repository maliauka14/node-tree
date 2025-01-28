import {
  CreateModal,
  DeleteModal,
  RenameModal,
} from "../../../../features/node";
import { INodeData } from "../../../../shared/ui/tree";
import { generateClassName } from "../../../../shared/utils";
import "./node-template.css";

const nodeTemplate =
  (
    createNode: (parentId: number, nodeName: string) => Promise<unknown>,
    isCreating: boolean,
    deleteNode: (nodeId: number) => Promise<unknown>,
    isDeleting: boolean,
    renameNode: (
      parentId: number,
      nodeName: string,
      newNodeName: string
    ) => Promise<unknown>,
    isUpdating: boolean
  ) =>
  (node: INodeData, isActive: boolean) => {
    return (
      <div
        className={generateClassName("custom-node", {
          "custom-node_selected": isActive,
        })}
      >
        <span className="custom-node__name">{node.name}</span>
        <div className="custom-node__actions">
          <CreateModal
            id={node.id}
            createNode={createNode}
            isLoading={isCreating}
          />
          <RenameModal
            id={node.id}
            nodeName={node.name}
            renameNode={renameNode}
            isLoading={isUpdating}
          />
          <DeleteModal
            id={node.id}
            nodeName={node.name}
            deleteNode={deleteNode}
            isLoading={isDeleting}
            isHaveChild={!!node.children && node.children.length > 0}
          />
        </div>
      </div>
    );
  };

export default nodeTemplate;
