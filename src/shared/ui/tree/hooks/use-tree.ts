import { useState } from "react";

const useTree = () => {
  const [selected, setSelected] = useState<undefined | number>();
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const handleSelectNode = (id: number) => {
    setExpanded((prevState) => {
      const newExp = new Set(prevState);
      if (newExp.has(id)) {
        newExp.delete(id);
      } else {
        newExp.add(id);
      }

      return newExp;
    });
    setSelected(id);
  };

  const hadleCheckIdExpand = (id: number) => expanded.has(id);

  return { selected, handleSelectNode, hadleCheckIdExpand };
};

export default useTree;
