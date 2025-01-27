export const generateClassName = (
  defaultClassName: string,
  conditions: { [key: string]: boolean | undefined }
): string => {
  let className = defaultClassName;

  for (const [key, value] of Object.entries(conditions)) {
    if (value) {
      className += ` ${key}`;
    }
  }

  return className;
};
