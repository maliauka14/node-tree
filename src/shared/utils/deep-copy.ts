import _ from "lodash";

export const deepCopy = <T>(data: T) => {
  return _.cloneDeep(data);
};
