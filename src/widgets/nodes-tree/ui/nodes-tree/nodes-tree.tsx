import { FC } from "react";

import { Tree } from "../../../../shared/ui/tree";
import { generateClassName } from "../../../../shared/utils";

import { CreateModal } from "../../../../features/node";
import { useNodes } from "../../../../entities/node";
import { Preloader } from "../../../../shared/ui/preloader";
import { nodeTemplate } from "../node-template";
import "./nodes-tree.css";

const NodesTree: FC = () => {
  const {
    treeName,
    treeId,
    treeData,
    isLoading,
    handleCreateNode,
    isCreating,
    handleDeleteNode,
    isDeleting,
    handleUpdateNode,
    isUpdating,
  } = useNodes();

  const isTreeEmpty = !treeData || !treeData.length;
  return (
    <>
      <Preloader open={isLoading} />
      <section className="nodes-tree">
        <h2 className="nodes-tree__title">
          {treeName} tree structure
          {treeId && (
            <CreateModal
              id={treeId}
              createNode={handleCreateNode}
              isLoading={isCreating}
            />
          )}
        </h2>
        <div
          className={generateClassName("nodes-tree__content", {
            "nodes-tree__content_empty": isTreeEmpty,
          })}
        >
          {isTreeEmpty ? (
            <span className="nodes-tree__empty-mark">No currect data</span>
          ) : (
            <Tree
              data={treeData}
              nodeTemplate={nodeTemplate(
                handleCreateNode,
                isCreating,
                handleDeleteNode,
                isDeleting,
                handleUpdateNode,
                isUpdating
              )}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default NodesTree;
