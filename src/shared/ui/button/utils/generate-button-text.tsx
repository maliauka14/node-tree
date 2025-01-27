import { ReactNode } from "react";
import { Spinner } from "../../spinner";

export const generateButtonContent = (
  loading?: boolean,
  children?: ReactNode,
  loadingText?: string
) => {
  if (loading) {
    return (
      <>
        <span className="button__content">{loadingText || children}</span>
        <Spinner size={16} />
      </>
    );
  }
  return children;
};
