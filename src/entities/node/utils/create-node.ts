import { INodeData } from "../../../shared/ui/tree";
import { deepCopy } from "../../../shared/utils";

export const createNode = (
  id: number | undefined,
  newNode: INodeData,
  tree: INodeData[]
) => {
  const newTree = deepCopy(tree);
  if (!id) {
    newTree.push(newNode);
    return newTree;
  }
  for (let i = 0; i < newTree.length; i++) {
    const node = newTree[i];
    if (node.id === id) {
      if (node.children) {
        node.children.push(newNode);
      } else {
        node.children = [newNode];
      }

      break;
    }
    if (Array.isArray(node.children) && node.children.length > 0) {
      node.children = createNode(id, newNode, node.children);
    }
  }
  return newTree;
};
