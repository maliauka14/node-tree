import { useEffect } from "react";

import { useSnackbar } from "notistack";

import {
  useDeleteNodesTree,
  useUpdateNodesTree,
  useCreateNodesTree,
  useGetNodesTree,
} from "../api";

const useNodes = () => {
  const treeName = "YauMal";
  const { enqueueSnackbar } = useSnackbar();
  const [getNodes, { data: treeData, isLoading }] = useGetNodesTree();
  const [deleteNode, { isLoading: isDeleting }] = useDeleteNodesTree();
  const [createNode, { isLoading: isCreating }] = useCreateNodesTree();
  const [updateNode, { isLoading: isUpdating }] = useUpdateNodesTree();

  useEffect(() => {
    getNodes({ params: { treeName } }).catch(() => {
      enqueueSnackbar(`Failed to get the ${treeName} tree data`, {
        variant: "error",
      });
    });
  }, []);

  const handleCreateNode = async (parentId: number, nodeName: string) => {
    if (!nodeName || nodeName.length < 3) {
      enqueueSnackbar("Node name must be longer than 3 symbols", {
        variant: "error",
      });
      return new Promise((resolve) => {
        resolve(false);
      });
    }
    try {
      await createNode({
        params: { treeName, parentNodeId: parentId, nodeName },
      });
      enqueueSnackbar(`Created the ${nodeName} node successfully`, {
        variant: "success",
      });
      getNodes({ params: { treeName } });
      return true;
    } catch {
      enqueueSnackbar(`Failed to create the ${nodeName} node`, {
        variant: "error",
      });
      return false;
    }
  };

  const handleUpdateNode = async (
    nodeId: number,
    nodeName: string,
    newNodeName: string
  ) => {
    if (!newNodeName || newNodeName.length < 3 || newNodeName === nodeName) {
      enqueueSnackbar(
        "Node name must not be same as the old one and must be longer than 3 symbols",
        {
          variant: "error",
        }
      );
      return new Promise((resolve) => {
        resolve(false);
      });
    }
    try {
      await updateNode({
        params: { treeName, nodeId, newNodeName },
      });
      enqueueSnackbar(`Updated the node successfully`, {
        variant: "success",
      });
      getNodes({ params: { treeName } });
      return true;
    } catch {
      enqueueSnackbar(`Failed to update the node`, {
        variant: "error",
      });
      return false;
    }
  };

  const handleDeleteNode = async (nodeId: number) => {
    try {
      await deleteNode({ params: { treeName, nodeId } });
      enqueueSnackbar(`Deleted the node successfully`, {
        variant: "success",
      });
      getNodes({ params: { treeName } });
      return true;
    } catch {
      enqueueSnackbar(`Failed to delete the node`, {
        variant: "error",
      });
      return false;
    }
  };

  return {
    treeName,
    treeId: treeData?.id,
    treeData: treeData?.children || [],
    isLoading,
    isCreating,
    handleCreateNode,
    isDeleting,
    handleDeleteNode,
    isUpdating,
    handleUpdateNode,
  };
};

export default useNodes;
