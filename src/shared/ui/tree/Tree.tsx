import { FC, MouseEvent } from "react";

import { MdArrowForwardIos } from "react-icons/md";
import { ITreeNodeProps, ITreeProps } from "./ts";
import { useTree } from "./hooks";
import { generateClassName } from "../../utils";
import "./tree.css";

const TreeNode: FC<ITreeNodeProps> = ({
  node,
  selected,
  handleSelectNode,
  hadleCheckIdExpand,
  nodeTemplate,
}) => {
  const { id, name, children } = node;
  const isNodeExpanded = hadleCheckIdExpand(id);
  const childrenIsEmpry = !!(children && children.length > 0);

  const handleClickNode = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    handleSelectNode(id);
  };

  return (
    <li className="tree__node">
      <div
        tabIndex={0}
        onClick={handleClickNode}
        className={generateClassName("tree__node-content", {
          "tree__node-content_selected": selected === id,
          "tree__node-content_empty": !childrenIsEmpry,
        })}
      >
        {childrenIsEmpry && (
          <MdArrowForwardIos
            className={generateClassName("tree__node-arrow", {
              "tree__node-arrow_rotated": isNodeExpanded,
            })}
          />
        )}
        {nodeTemplate ? nodeTemplate(node, selected === id) : name}
      </div>

      {childrenIsEmpry && isNodeExpanded && (
        <ul>
          {children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              selected={selected}
              handleSelectNode={handleSelectNode}
              hadleCheckIdExpand={hadleCheckIdExpand}
              nodeTemplate={nodeTemplate}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const Tree: FC<ITreeProps> = ({ data, className, nodeTemplate }) => {
  const { selected, hadleCheckIdExpand, handleSelectNode } = useTree();

  return (
    <ul className={`tree ${className || ""}`}>
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selected={selected}
          hadleCheckIdExpand={hadleCheckIdExpand}
          handleSelectNode={handleSelectNode}
          nodeTemplate={nodeTemplate}
        />
      ))}
    </ul>
  );
};

export default Tree;
