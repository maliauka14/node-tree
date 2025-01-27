import { INodeData } from "../../../shared/ui/tree";
import { deepCopy } from "../../../shared/utils";

export const deleteNode = (id: number, tree: INodeData[]) => {
  const newTree = deepCopy(tree);
  for (let i = 0; i < newTree.length; i++) {
    const node = newTree[i];
    if (node.id === id) {
      newTree.splice(i, 1);
      break;
    }
    if (Array.isArray(node.children) && node.children.length > 0) {
      node.children = deleteNode(id, node.children);
    }
  }
  return newTree;
};
