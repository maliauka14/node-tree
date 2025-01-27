import { useEffect } from "react";
import {
  useDeleteNodesTree,
  useUpdateNodesTree,
  useCreateNodesTree,
  useGetNodesTree,
} from "../api";
import { enqueueSnackbar } from "notistack";

const useNodes = () => {
  const treeName = "YauMal";
  const [getNodes, { data: treeData, isLoading }] = useGetNodesTree();
  const [deleteNode, { isLoading: isDeleting }] = useDeleteNodesTree();
  const [createNode, { isLoading: isCreating }] = useCreateNodesTree();
  const [updateNode, { isLoading: isUpdating }] = useUpdateNodesTree();

  useEffect(() => {
    getNodes({ params: { treeName } }).catch(() => {
      enqueueSnackbar(`Failed to get ${treeName} tree data`, {
        variant: "error",
      });
    });
  }, []);

  const handleCreateNode = (parentId: number, nodeName: string) => {
    if (!nodeName || nodeName.length < 3) {
      enqueueSnackbar("Node name must be longer than 3 symbols", {
        variant: "error",
      });
      return new Promise((resolve) => {
        resolve(false);
      });
    }
    return createNode({
      params: { treeName, parentNodeId: parentId, nodeName },
    })
      .then(() => {
        enqueueSnackbar(`Successfully create node`, {
          variant: "success",
        });
        return true;
      })
      .catch(() => {
        enqueueSnackbar(`Failed to create node`, {
          variant: "error",
        });
        return false;
      });
  };

  const handleUpdateNode = (
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
    return updateNode({
      params: { treeName, nodeId, newNodeName },
    })
      .then(() => {
        enqueueSnackbar(`Successfully update node`, {
          variant: "success",
        });
        return true;
      })
      .catch(() => {
        enqueueSnackbar(`Failed to update node`, {
          variant: "error",
        });
        return false;
      });
  };

  const handleDeleteNode = (nodeId: number) => {
    return deleteNode({ params: { treeName, nodeId } })
      .then(() => {
        enqueueSnackbar(`Successfully delete node`, {
          variant: "success",
        });
        return true;
      })
      .catch(() => {
        enqueueSnackbar(`Failed to delete node`, {
          variant: "error",
        });
        return false;
      });
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
