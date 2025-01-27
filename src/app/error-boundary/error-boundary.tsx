import { FC } from "react";

import { FallbackProps } from "react-error-boundary";

import { Button } from "../../shared/ui/button";
import { IErrorBoundaryProps } from "./ts";
import "./error-boundary.css";

const ErrorBoundary: FC<IErrorBoundaryProps> = ({ errorContent }) => {
  // correctly send the error to the server
  console.log(errorContent);
  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <section className="error-boundary">
      <h1 className="error-boundary__title">Oops!</h1>
      <h2 className="error-boundary__subtitle">
        It looks like we broke something. 😔
      </h2>
      <div className="error-boundary__description">
        An error occurred while processing, and unfortunately, we can't display
        the requested page. We're very sorry that you've encountered this issue.
        We'll do our best to restore normal functionality as soon as possible.
      </div>

      <Button className="error-boundary__button" onClick={handleReloadPage}>
        Reload page
      </Button>
    </section>
  );
};

const fallbackRender: FC<FallbackProps> = ({ error }) => {
  const content = {
    message: error.message,
    name: error.name,
    stack: error.stack,
  };
  return <ErrorBoundary errorContent={JSON.stringify(content)} />;
};

export default fallbackRender;
