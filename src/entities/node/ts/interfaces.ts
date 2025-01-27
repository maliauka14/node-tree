export interface IGetNodesTreeRequest {
  treeName: string;
}

export interface ICreateNodeRequest {
  treeName: string;
  parentNodeId: number;
  nodeName: string;
}

export interface IUpdateNodeRequest {
  treeName: string;
  nodeId: number;
  newNodeName: string;
}

export interface IDeleteNodeRequest {
  treeName: string;
  nodeId: number;
}
