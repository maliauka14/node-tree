import { generateMutation } from "../../../shared/hooks";
import { INodeData } from "../../../shared/ui/tree";
import {
  ICreateNodeRequest,
  IDeleteNodeRequest,
  IGetNodesTreeRequest,
  IUpdateNodeRequest,
} from "../ts";

export const useGetNodesTree = generateMutation<
  INodeData,
  IGetNodesTreeRequest,
  {}
>("/api.user.tree.get", "post");

export const useCreateNodesTree = generateMutation<{}, ICreateNodeRequest, {}>(
  "/api.user.tree.node.create",
  "post"
);
export const useUpdateNodesTree = generateMutation<
  INodeData,
  IUpdateNodeRequest,
  {}
>("/api.user.tree.node.rename", "post");
export const useDeleteNodesTree = generateMutation<{}, IDeleteNodeRequest, {}>(
  "/api.user.tree.node.delete",
  "post"
);
